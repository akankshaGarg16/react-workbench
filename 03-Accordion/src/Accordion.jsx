import { useRef, useState } from "react";

const Accordion = ({ categories }) => {
  const [toggle, setToggle] = useState({
    toggleValue: false,
    clickedIndex: null,
  });

  const prevClickedValue = useRef(null);

  function handleClick(index) {
    if (index === prevClickedValue.current) {
        setToggle({ toggleValue: !toggle.toggleValue, clickedIndex: index });
    } else {
         setToggle({ toggleValue: toggle.toggleValue, clickedIndex: index });
    }
    
 prevClickedValue.current = index;
  }

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-3xl">
      {categories.map((category, index) => {
        // don't forget to return here
        return (
          <div key={index}>
            <div className="flex flex-col m-4 p-4">
              <div
                className="bg-gray-200 text-slate-500 rounded-t-lg text-lg px-4 h-14 flex items-center"
                onClick={() => handleClick(index)}
              >
                {category.title}
              </div>
              {
              toggle.toggleValue && index === toggle?.clickedIndex ? (
                <div className="bg-white text-slate-600 rounded-b-lg text-center">
                  <ul>
                    {category.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
