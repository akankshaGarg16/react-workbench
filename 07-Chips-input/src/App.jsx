import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleEnter = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips((prev) => [...prev,input]);
      setInput("");
      document.getElementById("textInput").focus();
    }
  };

  const handleDelete = (index) => {
    let chipsbckp = [...chips];
    chipsbckp.splice(index, 1);
    setChips(chipsbckp);
  }

  return (
    <>
    <div className="w-1/2 m-auto">
      <h1 className="text-4xl m-4">Chips Input</h1>
      <input
        type="text"
        id="textInput"
        placeholder="Type a text and hit enter"
        className="border border-zinc-400 m-2 p-1 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <div className="flex">
        {chips.map((chip, index) => {
          return (
            <div className="border-2 border-[#3d3c3c] rounded-xl bg-[#aaaaa2] p-1 m-2">
              {chip}
              <button className="text-red-600 mx-2" onClick={() => handleDelete(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default App;
