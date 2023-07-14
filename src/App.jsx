import { useRef, useState } from "react";
import Draggable from "./components/draggable/Index";
import Table from "./components/table/Index";
import Card from "./components/card/Index";
import Footer from "./components/footer/Index";
import "./styles/global.scss";

function App() {
  const [leftZone, setLeftZone] = useState([]);
  const [rightZone, setRightZone] = useState([]);
  const items = [
    "👋 Hi",
    "😀 I'm Cheikhou",
    "🥰 I love Programming",
    "💪 And building web stuff",
  ];

  const containerRef = useRef(null);

  const removeItem = (array, setArray, text) => {
    const updatedItems = array.filter((item) => item !== text);
    setArray(updatedItems);
  };

  const handleDrag = (e) => {
    if (e.target?.classList?.contains("draggable")) {
      const text = e.target.textContent;
      const isAfterTheMiddleLine = hasPassedTheMiddleLine(
        e.target,
        containerRef.current
      );

      if (isAfterTheMiddleLine && rightZone.indexOf(text) == -1) {
        removeItem(leftZone, setLeftZone, text);
        setRightZone([...rightZone, text]);
      } else if (!isAfterTheMiddleLine && leftZone.indexOf(text) == -1) {
        removeItem(rightZone, setRightZone, text);
        setLeftZone([...leftZone, text]);
      }
    } else {
      return false;
    }
  };

  const hasPassedTheMiddleLine = (element, container) => {
    const containerRect = container.getBoundingClientRect();
    const containerMiddleLine = containerRect.left + containerRect.width / 2;

    const elementRect = element.getBoundingClientRect();
    const elementPosition = elementRect.left;

    // Check if the element is positioned after the middle line
    return elementPosition > containerMiddleLine;
  };

  return (
    <>
      <div className="container">
        <Card>
          <div ref={containerRef} className="canvas">
            {items.map((item, idx) => (
              <Draggable
                key={idx}
                id={idx}
                containerRef={containerRef}
                text={item}
                handleDrag={handleDrag}
              />
            ))}
          </div>
        </Card>
        <Table tableData={{ leftZone, rightZone }} />
      </div>
      <Footer />
    </>
  );
}

export default App;
