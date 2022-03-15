import React, { useRef, useState } from "react";

// function NameForm() {
//   const [text, setText] = useState("");
//   const ref1 = useRef();

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   const alertButton = () => {
//     // alert(`My name is ${text}`);
//     alert(`My name is ${ref1.current.value}`);
//     setText("");
//   };
//   return (
//     <div>
//       <input type="text" ref={ref1} value={text} onChange={handleChange} />
//       <button onClick={alertButton}>Alert</button>
//     </div>
//   );
// }

// export default NameForm;

export default function NameForm() {
  const [text, setText] = useState("");
  const alertref = useRef();
  const alertButton = () => {
    // alert(`My name is ${alertref.current.value}`);
    alert(`My name is ${text}`);
    alertref.current.value = "";
  };
  return (
    <div>
      <input
        type="text"
        ref={alertref}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={alertButton}>Alert</button>
    </div>
  );
}

// import React, { useRef, useState } from "react";

// export default function NameForm() {
//   const [text, setText] = useState("");
//   const ref1 = useRef();
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   const submit = (event) => {
//     event.preventDefault();
//     // alert(`My name is ${text}`);
//     alert(`My name is ${ref1.current.value}`);
//     setText("");
//   };
//   return (
//     <form>
//       <label>
//         <input type="text" ref={ref1} value={text} onChange={handleChange} />
//         <button onClick={submit}>submit</button>
//       </label>
//     </form>
//   );
// }
