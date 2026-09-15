import { useState } from "react";

const Tabs = ({ tabs }) => {

    const [selected, setSelected] = useState(0);
  return (
    <div>
        <div className="flex m-2 p-2">
      {tabs.map((tab, index) => (
        <div className="px-2 w-60 font-bold text-lg" key={index}>
          <div className={index === selected ? "border-b-4 border-b-blue-700" : null} onClick={() => setSelected(index)}>{tab?.title ? tab?.title : `Tab ${index+1}`}</div>
        </div>
      ))}
    </div>
    <div className="mx-6 "> {tabs[selected]?.content ? tabs[selected]?.content : "No content available"}</div>
    </div>
  );
};

export default Tabs;