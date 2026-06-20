import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${clicked ? "cursor-active" : ""}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div
        className={`custom-cursor-dot ${clicked ? "cursor-active" : ""}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </>
  );
}

export default CustomCursor;
