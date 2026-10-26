
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setCount(0);
    setHasStarted(true);
    setIsRunning(true);
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
    setHasStarted(false);
  };

  const handlePauseResume = () => {
    if (!hasStarted) return;
    setIsRunning((prev) => !prev);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={handleStart}>Start</button>

      <button onClick={handleReset}>Reset</button>

      <button
        onClick={handlePauseResume}
        disabled={!hasStarted}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
}

export default App;
