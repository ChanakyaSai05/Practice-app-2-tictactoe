// import React, { useEffect, useRef, useState } from "react";

// export default function PasswordStrength() {
//   const [password, setPassword] = useState("");
//   const ref = useRef();
//   const ref1 = useRef();
//   const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   let result;
//   if (password === "") {
//     result = "";
//   } else if (password.length < 5) {
//     ref1.current.style.color = "red";
//     result = "password is weak";
//   } else if (regex.test(password)) {
//     ref1.current.style.color = "green";
//     result = "password is strong";
//   } else {
//     ref1.current.style.color = "yellow";
//     result = "password is moderate";
//   }
//   useEffect(function () {
//     ref.current.focus();
//   }, []);
//   return (
//     <div>
//       <input
//         type="text"
//         id="password"
//         value={password}
//         ref={ref}
//         onChange={(event) => setPassword(event.target.value)}
//       />

//       <div ref={ref1}> {result}</div>
//     </div>
//   );
// }

// export default function PasswordStrength(){
//   const [password,setPassword]=useState("")
//   const ref=useRef();
//   const ref1=useRef();
//   const regex=regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   let result;
//   if(password===""){
//     result="";
//   }else if(password.length<5){
//     result="password is weak";
//     ref.current.style.color="red"
//   }else if(regex.test(password)){
//     result="password is strong";
//     ref.current.style.color="green"
//   }else{
//     result="password is moderate";
//     ref.current.style.color="yellow"
//   }
//   useEffect(function(){
//     ref1.current.focus();
//   },[])
//   return(
//     <>
//     <input type="text" value={password} onChange={(event)=>setPassword(event.password.value)} />
//     <div ref={ref}>{message}</div>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
export default function PasswordStrength() {
  const [password, setPassword] = useState("");
  const ref = useRef();
  // const ref1 = useRef();
  let result = ""; //we cannot use const here since we are using at multiple places.If we use const then we get an error
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (password === "") {
    // result = "";
    // ref.current.innerHTML = " "; //these two lines are not working it showing error
    // ref.current.innerText = ""; //when refreshingPasswordStrength.js:77 Uncaught TypeError: Cannot set properties of undefined (setting 'innerHTML')
  } else if (password.length < 5) {
    // result = "weak";
    // ref1.current.value = "weak"; //this is working in input tag
    ref.current.innerHTML = "weak";
    ref.current.style.color = "red";
  } else if (regex.test(password)) {
    // result = "strong";
    // ref.current.value//this is not working
    ref.current.innerHTML = "strong"; //this is working
    ref.current.style.color = "green";
  } else {
    // result = "Moderate";
    ref.current.innerHTML = "moderate";
    ref.current.style.color = "yellow";
  }
  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div ref={ref}>{result}</div>
      {/* <input type="text" ref={ref1} /> */}
    </div>
  );
}
// import React, { useRef, useState } from "react";
// export default function PasswordStrength() {
//   const [password, setPassword] = useState("");
//   const ref = useRef();
//   let result = ""; //we cannot use const here since we are using at multiple places.If we use const then we get an error
//   const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   if (password === "") {
//     result = "";
//   } else if (password.length < 5) {
//     result = "weak";
//     ref.current.style.color = "red";
//   } else if (regex.test(password)) {
//     result = "strong";
//     ref.current.style.color = "green";
//   } else {
//     result = "Moderate";
//     ref.current.style.color = "yellow";
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <div ref={ref}>{result}</div>
//     </div>
//   );
// }
