import React from "react";

function TodoList() {
    const todos = ["First Todo", "Second Todo"];
  return (
    <ul>
        {todos.map((todo) => (
            <ol>
            <input type="checkbox" /> {todo}
          </ol>
        ))}
    </ul>
  );
}

export default TodoList;
