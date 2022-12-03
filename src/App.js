import "./styles.css";
import { useState, useRef, useEffect } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState("Start");
  let intervalRef = useRef();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const handleStartOrPause = () => {
    if (buttonText === "Start") {
      intervalRef.current = setInterval(() => {
        setCounter((prevVal) => prevVal + 1);
      }, 1000);
      setButtonText("Pause");
    } else {
      setButtonText("Start");
      clearInterval(intervalRef.current);
    }
  };
  const handleReset = () => {
    setButtonText("Start");
    setCounter(0);
    clearInterval(intervalRef.current);
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleStartOrPause}>{buttonText}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
