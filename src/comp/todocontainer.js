import React from "react";
import Todo from "./todo.js";

function TodoContainer(props) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item) => (
        <Todo item={item} />
      ))}
    </div>
  );
}

export default TodoContainer;
