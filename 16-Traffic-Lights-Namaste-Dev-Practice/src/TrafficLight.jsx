import { useEffect, useState } from 'react';
import "./App.css";

const TrafficLight = () => {

  const timings = {
    red: 3000,
    yellow: 1000,
    green: 2000,
  };

  const nextColor = {
    red: "yellow",
    yellow: "green",
    green: "red",
  };

  const [selected, setSelected] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(nextColor[selected]);
    }, timings[selected]);

    // Cleanup the timer
    return () => {
      clearTimeout(timer);
    };
  }, [selected]);
    return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className="traffic-light"
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={selected === "red" ? 'circle red-on' : 'circle'}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={selected === "yellow" ? 'circle yellow-on' : 'circle'}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={selected === "green" ? 'circle green-on' : 'circle'}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
