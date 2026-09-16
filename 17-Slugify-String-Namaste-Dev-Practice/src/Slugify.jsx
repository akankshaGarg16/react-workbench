import { useState } from 'react';
// import "./Slugify.css";

function Slugify() {
  const [input, setInput] = useState("");
  const [slugInput, setSlugInput] = useState("");

  function slugifyString(str) {
    // Write logic to slugify string
    str = str
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replaceAll(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, " ")
      .replaceAll(' ', '-')
    setSlugInput(str);
  }

  return (
    <div>
      <h1>Slugify a String</h1>

      <div className="container">{/* Add Input and Result */}
        <input className="input-box" type="text" value={input} onChange={(e) => {
          setInput(e.target.value);
          slugifyString(e.target.value)
        }}
        ></input>
        <p className="result">{slugInput}</p>
      </div>
    </div>
  );
}
export default Slugify;
