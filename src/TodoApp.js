import React, { useState } from "react";

export default function TodoApp() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [doneList, setDoneList] = useState([]);
  function addButton() {
    setTodolist([...todoList, todoText]);
    setTodoText("");
  }

  const doneButton = (index) => {
    setDoneList([...doneList, todoList[index]]);
    const todoItemsNew = [...todoList];
    todoItemsNew.splice(index, 1);
    setTodolist(todoItemsNew);
  };
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button onClick={addButton}>Add to Todo List</button>
      {todoList.length > 0 && (
        <div>
          <h2>Todo List</h2>
          <ul>
            {todoList.map((item, index) => (
              <li>
                {item}
                <button onClick={() => doneButton(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {doneList.length > 0 && (
        <div>
          <h2>Done List</h2>
          <ul>
            {doneList.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
