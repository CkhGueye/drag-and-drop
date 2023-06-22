import { useDragControls, motion } from "framer-motion";
import "./draggable.scss";

export default function Draggable({ id, containerRef, text, handleDrag }) {
  const controls = useDragControls();

  return (
    <>
      <motion.div
        id={id}
        className="draggable"
        drag
        dragControls={controls}
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={(e) => handleDrag(e)}
      >
        {text}
      </motion.div>
    </>
  );
}
