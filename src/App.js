import { useRef, useState } from "react";
import "./App.css";

export const App = () => {
  const sliderRef = useRef();
  const [currentPositionX, setCurrentPositionX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseMove = (event) => {
    if (!isDragging) return;
    const node = sliderRef.current.getBoundingClientRect();

    // goes to the left
    if (currentPositionX > event.pageX) {
      console.log("llendo a la izquierda");
      setTranslateX(node.left - 12);
    }

    // goes to the right
    if (currentPositionX < event.pageX) {
      console.log("llendo a la derecha");
      setTranslateX(node.left + 12);
    }

    // sliderRef.current.style.transform = `translate(${event.pageX}px)`;
  };

  const onMouseUp = () => {
    sliderRef.current.removeEventListener("mousemove", onMouseMove);

    setCurrentPositionX(0);
    setIsDragging(false);
  };

  const handleMouseDown = ({ clientX }) => {
    sliderRef.current.addEventListener("mousemove", onMouseMove);
    sliderRef.current.addEventListener("mouseup", onMouseUp);
    setCurrentPositionX(clientX);
    setIsDragging(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          className="slider-container"
        >
          <div
            ref={sliderRef}
            style={{ transform: `translate(${translateX}px)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            id="slider"
            className="slider"
          >
            <div className="slider-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="slider-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="slider-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
