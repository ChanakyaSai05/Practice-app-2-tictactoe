import React, { useEffect, useRef, useState } from "react";

export default function FormFunction() {
  const [text, setText] = useState("");
  const ref = useRef();
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The input is " + text);
  };
  useEffect(function () {
    console.log("Mount");
    ref.current.focus();
  }, []);
  return (
    <form onClick={handleSubmit}>
      <input type="text" ref={ref} value={text} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
