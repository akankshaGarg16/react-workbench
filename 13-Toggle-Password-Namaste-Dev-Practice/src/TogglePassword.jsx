import React, { useRef, useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import "./app.css";

function TogglePassword() {
  const [seen, setSeen] = useState(false);
  const eyeRef = useRef();
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={seen ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          ref={eyeRef}
        />
        <span
          className="icon"
          onClick={() => { setSeen(!seen); eyeRef.current.focus(); }}
        >
          {seen ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label">
        {seen ? "Password Visible" : "Password Hidden" }
      </span>
    </div>
  );
}

export default TogglePassword;
