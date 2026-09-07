import { useState } from "react";
import "./App.css";
import SetClockColorOnDropdownChange from "./SetClockColorOnDropdownChange";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <h1>Color changing Digital Clock</h1>
      <select onChange={(event) => setColor(event.target.value)} defaultValue="green">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
      <SetClockColorOnDropdownChange color={color} />
    </>
  );
}

export default App;
