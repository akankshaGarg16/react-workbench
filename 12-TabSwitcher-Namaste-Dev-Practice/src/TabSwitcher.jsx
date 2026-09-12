import React, { useState } from "react";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  const [selected, setSelected] = useState("home")
  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>
      <div className="tab-buttons">
        {tabs.map((tab) => {
          return <button
            data-testid={`tab-button-${tab.id}`}
            className={tab.id === selected ? 'active':null}
            key={tab.id}
          onClick={()=>setSelected(tab.id)}>
            {tab?.label}
          </button>
        })}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {tabs.find((tab) => tab.id === selected)?.content}
      </div>
    </div>
  );
}
