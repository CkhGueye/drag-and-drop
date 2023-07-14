import { useDragControls, motion } from "framer-motion";
import "./draggable.scss";
import { useState } from "react";

export default function Draggable({ id, containerRef, text, handleDrag }) {
  const controls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

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
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(e) => {
          handleDrag(e), setIsDragging(false);
        }}
        style={{ zIndex: isDragging ? 1 : 0 }}
      >
        {text}
      </motion.div>
    </>
  );
}
