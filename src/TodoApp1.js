// import React, { useState } from "react";

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodolist] = useState(
//     JSON.parse(localStorage.getItem("todos"))
//   );
//   localStorage.setItem("todos", JSON.stringify(todoList));
//   function addButton() {
//     setTodolist([
//       ...todoList,
//       { name: todoText, status: "TODO", id: todoList.length + 1 },
//     ]);
//     setTodoText("");
//     // localStorage.setItem("todos", JSON.stringify(todoList));
//   }
//   const doneButton = (index) => {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = "DONE";
//     setTodolist(todoItemsNew);
//     localStorage.setItem("todos", JSON.stringify(todoItemsNew));
//   };
//   const removeButton = (index) => {
//     const todoItemsNew = [...todoList];
//     todoItemsNew.splice(index, 1);
//     setTodolist(todoItemsNew);
//     localStorage.removeItem("todos", JSON.stringify(todoItemsNew));
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       />
//       <button onClick={addButton}>Add to Todo List</button>
//       {todoList.length > 0 && (
//         <div>
//           <h2>Todo List</h2>
//           <ul>
//             {todoList.map((item, index) => (
//               <li key={item.id}>
//                 {item.status === "TODO" ? (
//                   item.name
//                 ) : (
//                   <>
//                     <span
//                       style={{ color: "red", textDecoration: "line-through" }}
//                     >
//                       {item.name}
//                     </span>
//                     <button onClick={() => removeButton(index)}>X</button>
//                   </>
//                 )}
//                 {item.status === "TODO" && (
//                   <>
//                     <button onClick={() => doneButton(index)}>✓</button>
//                     <button onClick={() => removeButton(index)}>X</button>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* {doneList.length > 0 && (
//         <div>
//           <h2>Done List</h2>
//           <ul>
//             {doneList.map((el) => (
//               <li>{el}</li>
//             ))}
//           </ul>
//         </div>
//       )}  */}
//     </div>
//   );
// }
//practice
// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodolist] = useState([]);

//   const addButton = () => {
//     setTodolist(...todoList, { name: todoText, status: "TODO" });
//     setTodoText("");
//   };
//   const updateTodoStatus = (index, status) => {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = status;
//     setTodolist(todoItemsNew);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       />
//       <button onClick={addButton}> Add</button>
//       <h1>Todo List</h1>

//       <div>
//         <ul>
//           {todoList.map((item, index) => (
//             <l1>
//               {item.status === "TODO" ? (
//                 item.name
//               ) : (
//                 <>
//                   <span style={{ color: "red" }}>{item.name}</span>
//                   <button onClick={() => updateTodoStatus(index, "TODO")}>
//                     Move again to todo
//                   </button>
//                 </>
//               )}
//               {item.status === "TODO" && (
//                 <button onClick={() => updateTodoStatus(index, "DONE")}>
//                   Done
//                 </button>
//               )}
//             </l1>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   function handleAddTodo() {
//     setTodoList([...todoList, { name: todoText, status: "TODO" }]);
//     setTodoText("");
//   }
//   function deleteTodo(index) {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = "DONE";
//     setTodoList(todoItemsNew);
//   }
//   return (
//     <div>
//       <h5>Enter your task here</h5>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       ></input>
//       <button onClick={handleAddTodo}>Done</button>
//       <ul>
//         {todoList.map((item, index) => (
//           <li>
//             {item.status === "TODO" ? (
//               item.name
//             ) : (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {item.name}
//               </span>
//             )}
//             {item.status === "TODO" && (
//               <button onClick={() => deleteTodo(index)}>Done</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   function handleAddTodo() {
//     setTodoList([...todoList, { name: todoText, status: "TODO" }]);
//     setTodoText("");
//   }
//   function deleteTodo(index) {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = "DONE";
//     setTodoList(todoItemsNew);
//   }
//   function Redo(index) {
//     const todoItemsNew1 = [...todoList];
//     todoItemsNew1[index].status = "TODO";
//     setTodoList(todoItemsNew1);
//   }
//   return (
//     <div>
//       <h5>Enter your task here</h5>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       ></input>
//       <button onClick={handleAddTodo}>Done</button>
//       <ul>
//         {todoList.map((item, index) => (
//           <li>
//             {item.status === "TODO" ? (
//               item.name
//             ) : (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {item.name}
//                 <button onClick={() => Redo(index)}>Move back to todo</button>
//               </span>
//             )}
//             {item.status === "TODO" && (
//               <button onClick={() => deleteTodo(index)}>Done</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("todos")) || []
//   );

//   function handleAddTodo() {
//     setTodoList([
//       ...todoList,
//       { name: todoText, status: "TODO", id: todoList.length + 1 },
//     ]);
//     setTodoText("");
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }
//   function updateTodoStatus(index, status) {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = status;
//     setTodoList(todoItemsNew);
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }

//   return (
//     <div>
//       <h5>Enter your task here</h5>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       ></input>
//       <button onClick={handleAddTodo}>Done</button>
//       <ul>
//         {todoList.map((item, index) => (
//           <li key={item.id}>
//             {/* here we should not write item.name if you write because same name can exist  */}
//             {item.status === "TODO" ? (
//               item.name
//             ) : (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {item.name}
//                 <button onClick={() => updateTodoStatus(index, "TODO")}>
//                   Move back to todo
//                 </button>
//               </span>
//             )}
//             {item.status === "TODO" && (
//               <button onClick={() => updateTodoStatus(index, "DONE")}>
//                 Done
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const intialTodoItems = localStorage.getItem("todos")
//     ? JSON.parse(localStorage.getItem("todos"))
//     : [];
//   const [todoList, setTodoList] = useState(intialTodoItems);

//   function handleAddTodo() {
//     setTodoList([
//       ...todoList,
//       { name: todoText, status: "TODO", id: todoList.length + 1 },
//     ]);
//     setTodoText("");
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }
//   function updateTodoStatus(index, status) {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = status;
//     setTodoList(todoItemsNew);
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }

//   return (
//     <div>
//       <h5>Enter your task here</h5>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       ></input>
//       <button onClick={handleAddTodo}>Done</button>
//       <ul>
//         {todoList.map((item, index) => (
//           <li key={item.id}>
//             {/* here we should not write item.name if you write because same name can exist  */}
//             {item.status === "TODO" ? (
//               item.name
//             ) : (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {item.name}
//                 <button onClick={() => updateTodoStatus(index, "TODO")}>
//                   Move back to todo
//                 </button>
//               </span>
//             )}
//             {item.status === "TODO" && (
//               <button onClick={() => updateTodoStatus(index, "DONE")}>
//                 Done
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("Todo")) || []
//   );
//   const [doneList, setDoneList] = useState(
//     JSON.parse(localStorage.getItem("done")) || []
//   );

//   const addTodo = () => {
//     setTodoList([...todoList, todoText]);
//     localStorage.setItem("Todo", JSON.stringify(todoList));
//     setTodoText("");
//   };
//   const doneButton = (index) => {
//     setDoneList([...doneList, todoList[index]]);
//     const todoItemsNew = [...todoList];
//     localStorage.setItem("done", JSON.stringify(doneList));
//     todoItemsNew.splice(index, 1);
//     setTodoList(todoItemsNew);
//     localStorage.setItem("Todo", JSON.stringify(todoItemsNew));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todoList.map((item, index) => (
//           <li>
//             {item} <button onClick={() => doneButton(index)}>Done</button>
//           </li>
//         ))}
//       </ul>

//       <ul>
//         {doneList.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoApp1() {
//   const [todoText, setTodoText] = useState("");
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("Todo")) || []
//   );

//   const addTodo = () => {
//     setTodoList([
//       ...todoList,
//       { name: todoText, status: "TODO", id: todoList + 1 },
//     ]);
//     localStorage.setItem("Todo", JSON.stringify(todoList));
//     setTodoText(" ");
//   };
//   const updateButton = (index, status) => {
//     const todoItemsNew = [...todoList];
//     todoItemsNew[index].status = status;
//     setTodoList(todoItemsNew);
//     localStorage.setItem("Todo", JSON.stringify(todoItemsNew));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={todoText}
//         onChange={(event) => setTodoText(event.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {/* {todoList.map((item, index) => (
//           <li>
//             {item} <button onClick={() => updateButton(index)}>Done</button>
//           </li>
//         ))}
//       </ul> */}

//         {todoList.map((item, index) => (
//           <li key={item.id}>
//             {item.status === "TODO" ? (
//               item.name
//             ) : (
//               <span style={{ color: "red", textDecoration: "line-through" }}>
//                 {item.name}
//               </span>
//             )}
//             {item.status === "TODO" && (
//               <button onClick={() => updateButton(index, "DONE")}>Done</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState } from "react";

function TodoApp1() {
  const [text, setTodoText] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  localStorage.setItem("todos", JSON.stringify(todoList));
  const addButton = () => {
    setTodoList([
      ...todoList,
      { name: text, status: "TODO", id: todoList.length + 1 },
    ]);
    setTodoText("");
  };
  const doneButton = (index) => {
    const todoItemsNew = [...todoList];
    todoItemsNew[index].status = "DONE";
    setTodoList(todoItemsNew);
    localStorage.setItem("todos", JSON.stringify(todoItemsNew));
  };
  const deleteButton = (index) => {
    const todoItemsNew = [...todoList];
    todoItemsNew.splice(index, 1);
    setTodoList(todoItemsNew);
    localStorage.setItem("todos", JSON.stringify(todoItemsNew));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button onClick={addButton}>Add to todoList</button>
      <div>
        <h2>TODO LIST</h2>
        <ul>
          {todoList.map((item, index) => (
            <li key={item.id}>
              {item.status === "TODO" ? (
                <>
                  {item.name}

                  <button onClick={() => doneButton(index)}>✓</button>
                  <button onClick={() => deleteButton(index)}>X</button>
                </>
              ) : (
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  <>
                    {item.name}
                    <button onClick={() => deleteButton(index)}>X</button>
                  </>
                </span>
              )}
              {/* {item.status === "TODO" && (
                <>
                  <button onClick={() => doneButton(index)}>✓</button>
                  <button onClick={() => deleteButton(index)}>X</button>
                </>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp1;
