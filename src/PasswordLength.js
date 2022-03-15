import React, { useState } from "react";

export default function PasswordLength() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <h1>Length of the password is {password.length}</h1>
    </div>
  );
}
