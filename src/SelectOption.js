import React, { useState } from "react";

// export default function SelectOption() {
//   const [country, setCountry] = useState("IND");

//   return (
//     <div>
//       <select
//         value={country}
//         onChange={(event) => setCountry(event.target.value)}
//       >
//         <option>NZ</option>
//         <option>AUS</option>
//         <option>IND</option>
//       </select>
//       <div>Your Selected country is {country}</div>
//     </div>
//   );
// }

// export default function SelectOption() {
//   const [country, setCountry] = useState("");
//   return (
//     <div>
//       <select
//         value={country}
//         onChange={(event) => setCountry(event.target.value)}
//       >
//         <option>IND</option>
//         <option>NZ</option>
//         <option>AUS</option>
//       </select>
//       <div>your selected country is {country}</div>
//     </div>
//   );
// }

export default function SelectOption() {
  const [country, setCountry] = useState("");
  return (
    <div>
      <select
        value={country} //If not written also works but on reset this will be seen
        //In which country we reset //so we have to write then it turns to empty string
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="" disabled>
          __select any one__
        </option>
        <option>IND</option>
        <option>NZ</option>
        <option>AUS</option>
      </select>
      <div> your selected country is {country}</div>
      <div onClick={() => setCountry("")}>Reset</div>
    </div>
  );
}
