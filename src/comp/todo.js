import React from "react";

function Todo(props) {
  return (
    <div className="todoItem">
      {props.item}
      <button>delete</button>
    </div>
  );
}

export default Todo;
