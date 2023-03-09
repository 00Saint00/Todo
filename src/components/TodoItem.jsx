import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.status} />
      {item.text}
    </div>
  );
};

export default TodoItem;
