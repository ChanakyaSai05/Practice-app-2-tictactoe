import React, { useState } from "react";

export default function TodoNewSir() {
  const [text, setText] = useState("");
  const [list, setTodoList] = useState([]);
  const inputFunction = (event) => {
    setText(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    setTodoList((list) => [...list, text]);
    setText("");
  };

  const deleteTodo = (key) => {
    list.splice(key, 1);
    setTodoList((list) => [...list]);
  };

  // const checkButton = (index) => {
  //   const todoItemsNew = [...list];
  //   todoItemsNew[index].setAttribute("style", "backgroundColor=red");
  //   setTodoList(todoItemsNew);
  // };
  return (
    <div>
      <input type="text" value={text} onChange={inputFunction} />
      <button onClick={submit}>submit</button>
      <h2>Todo list</h2>
      <ul>
        {list.map((el, index) => (
          <div key={index} className="todo">
            <div>
              <label>{el}</label>
              <button onClick={() => checkButton(index)}>/</button>
              <button onClick={() => deleteTodo(index)}>X</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
