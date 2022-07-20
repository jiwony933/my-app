import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArr) => [toDo, ...currentArr]);
    setToDo("");
  };
  return (
    <div>
      <h2>My Todos ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write somethings"
        />
        <button>Add</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <p key={index}>[] {item}</p>
      ))}

      {console.log(toDos)}
    </div>
  );
}

export default App;
