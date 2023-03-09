import React, { useState } from "react";

const InputToDo = ({ setTodos, todos }) => {
  const addTodoItem = () => {
    setTodos([
      ...todos,
      {
        text: inputValue,
        status: false,
      },
    ]);
    setInputValue("");
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <div className="bottomBorder">
      <div className="input-todo">
        <input
          type="text"
          placeholder="Add New ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodoItem}>Add</button>
      </div>
    </div>
  );
};

export default InputToDo;
