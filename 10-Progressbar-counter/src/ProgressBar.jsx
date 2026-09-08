import React, { useState } from "react";

function ProgressBar() {
  const [count, setCount] = useState(0);
  const progressColor = count < 40 ? "red" : count <= 79 ? "orange" : "green";

  const handleProgressvalue = (op) => {
    if (op === "minus" && count - 10 >= 0) {
      setCount(count - 10);
      console.log(count);
    } else if (op === "add" && count + 10 <= 100) {
      setCount(count + 10);
      console.log(count);
    }
  };
  return (
    <div>
      <h1>Progress Bar</h1>
      <h3>Using HTML progress tag</h3>
      <progress
        style={{ backgroundColor: "red" }}
        value={count}
        max="100"
      ></progress>
      <br /> <br />
      <h3>Using custom progressbar using div</h3>
      <div
        style={{
          width: "500px",
          height: "34px",
          backgroundColor: "#d3d3d3",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${count}%`,
            height: "100%",
            backgroundColor:
              count < 40 ? "red" : count <= 79 ? "orange" : "green",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              marginInline: "auto"
            }}
          >
            {count}%
          </span>
        </div>
      </div>
      <br /> <br />
      <button onClick={() => handleProgressvalue("minus")}>-10%</button>
      &nbsp; &nbsp;
      <button onClick={() => handleProgressvalue("add")}>+10%</button>
    </div>
  );
}

export default ProgressBar;
