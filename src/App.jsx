import { useRef, useState } from "react";
import "./styles/global.scss";
import Draggable from "./components/draggable/Index";
import Table from "./components/table/Index";
import Card from "./components/card/Index";

function App() {
  const [leftZone, setLeftZone] = useState([]);
  const [rightZone, setRightZone] = useState([]);
  const [tableData, setTableData] = useState([]);
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
    var containerRect = container.getBoundingClientRect();
    var containerMiddleLine = containerRect.left + containerRect.width / 2;

    var elementRect = element.getBoundingClientRect();
    var elementPosition = elementRect.left;

    // Check if the element is positioned after the middle line
    return elementPosition > containerMiddleLine;
  };

  const handleButton = () => {
    setTableData({
      leftZone: [...leftZone],
      rightZone: [...rightZone],
    });
  };

  return (
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
      <button type="button" onClick={handleButton}>
        Save
      </button>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
