import { useState, useEffect } from "react";

const SetClockColorOnDropdownChange = ({ color }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  
  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "168px",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default SetClockColorOnDropdownChange;
