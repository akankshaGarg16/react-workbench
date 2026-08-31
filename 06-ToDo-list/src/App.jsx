import { useState } from "react";
import "./App.css";
import deleteIcon from "./assets/delete.svg";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    // made mistake here, did input.trim, missed the paranthesis.
    if (input.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setInput(""); // after adding the todo item, text field becomes blank again
  };

  const toggleItem = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          // made so many mistakes here, did return () and not {}, though its a single statement can send without ()
          // 2. did completed = and not :
          // 3. wasnt using return, was directly doing  t.completed: !t.completed, though we need to return an obj
          // 4. didnt wrote return, though its very imp here
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      }),
    );
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-2 border-[#b7b1b1] rounded-xl bg-[#f6f6d0] w-4/12">
        <div className="p-4 flex flex-col items-center">
          <div className="text-gray-600 font-medium">My TODO List</div>
          <div>
            <input
              type="text"
              placeholder="Enter ToDo"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="m-5 border-2 border-[#b7b1b1]"
            />
            <button
              onClick={addItem}
              className="p-1 bg-indigo-500 hover:bg-indigo-800 rounded-md text-white px-4"
            >
              Add
            </button>
          </div>
          <ul className="p-4 flex flex-col gap-y-4">
            {todoList.map((t) => (
              <li key={t.id} className="flex gap-x-8">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleItem(t.id)}
                />
                <span className={t.completed ? "strikethrough-text" : ""}>
                  {t.text}
                </span>
                <button
                  onClick={() => deleteItem(t.id)}
                  className="p-1 bg-red-500 hover:bg-red-800 rounded-md text-white px-4"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        {todoList.length > 0 && (
          <button className="rounded-md text-white p-1 px-2 m-2 float-right" 
          onClick={() => setTodoList([])}>
            <img src={deleteIcon} alt="clear all" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
