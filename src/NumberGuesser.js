import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import "./App.css";

// export default function NumberGuesser() {
//   const [num, setNum] = useState("");
//   const [winMessage, setWinMessage] = useState("");
//   const [count, setCount] = useState(0);
//   const [isGameOver, setisGameOver] = useState(false);
//   const style = {
//     display: "flex",
//     width: "100vw",
//     justifyContent: "center",
//     marginTop: "2vw",
//   };

//   const submitButton = () => {
//     if (isGameOver) {
//       return;
//     } else {
//       setCount(count + 1);
//       if (count === 3) {
//         setisGameOver(!isGameOver);
//         setCount(0);
//         setWinMessage("Better Luck Next time");
//         return;
//       }
//       checkGame();
//     }
//   };
//   const checkGame = () => {
//     const randomNumber = Math.floor(5 * Math.random());
//     let number = +num;
//     console.log(randomNumber);
//     if (number === randomNumber) {
//       setisGameOver(!isGameOver);
//       setWinMessage("Congratulations! You won 10000Rs Cash Price");
//     } else {
//       setWinMessage("Try again");
//     }
//   };
//   const reload = () => {
//     setCount(0);
//     setWinMessage("");
//     setNum("");
//     setisGameOver(false);
//   };
//   return (
//     <div style={style}>
//       <div style={{ width: "30vw" }}>
//         <h2>Enter a number between 0 to 5</h2>
//         <h5>You have 3 chances to match</h5>
//         <input
//           type="number"
//           value={num}
//           onChange={(event) => setNum(event.target.value)}
//         />
//         <div>{winMessage}</div>
//         <div>
//           <Button color="success" onClick={submitButton}>
//             Submit
//           </Button>
//           {isGameOver && (
//             <Button color="success" onClick={reload}>
//               Reload
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// let randomNumber = Math.floor(5 * Math.random());
// export default function NumberGuesser() {
//   const [num, setNum] = useState("");
//   const [winMessage, setWinMessage] = useState("");
//   const [count, setCount] = useState(0);
//   const [isGameOver, setisGameOver] = useState(false);
//   let ref = useRef();

//   const style = {
//     display: "flex",
//     width: "100vw",
//     justifyContent: "center",
//     marginTop: "2vw",
//   };

//   const submitButton = () => {
//     if (isGameOver) {
//       return;
//     } else {
//       setCount(count + 1);
//       if (count === 3) {
//         setisGameOver(!isGameOver);
//         setCount(0);
//         setWinMessage("Better Luck Next time");
//         return;
//       }
//       checkGame();
//     }
//   };
//   const checkGame = () => {
//     let number = +num;
//     console.log(randomNumber);
//     if (number === randomNumber) {
//       setisGameOver(!isGameOver);
//       setWinMessage("Congratulations! You won 10000Rs Cash Price");
//     } else {
//       setWinMessage("Try again");
//     }
//   };
//   const reload = () => {
//     setCount(0);
//     setWinMessage("");
//     setNum("");
//     setisGameOver(false);
//     randomNumber = Math.floor(5 * Math.random());
//   };
//   useEffect(function () {
//     ref.current.focus();
//   }, []);
//   return (
//     <div style={style}>
//       <div style={{ width: "30vw" }}>
//         <h2>Enter a number between 0 to 5</h2>
//         <h5>You have 3 chances to match</h5>
//         <input
//           type="number"
//           ref={ref}
//           value={num}
//           onChange={(event) => setNum(event.target.value)}
//         />
//         <div>{winMessage}</div>
//         <div>
//           <Button color="success" onClick={submitButton}>
//             Submit
//           </Button>
//           {isGameOver && (
//             <Button color="success" onClick={reload}>
//               Reload
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//Guessing a number between 1 to 100
// let randomNumber = Math.floor(100 * Math.random());
// export default function NumberGuesser() {
//   const [num, setNum] = useState("");
//   const [winMessage, setWinMessage] = useState("");
//   const [count, setCount] = useState(1);
//   const [remCount, setRemCount] = useState(6);
//   const [isGameOver, setisGameOver] = useState(false);
//   let ref = useRef();

//   const style = {
//     display: "flex",
//     width: "100vw",
//     justifyContent: "center",
//     marginLeft: "80px",
//     marginTop: "50px",
//   };

//   const submitButton = () => {
//     setCount(count + 1);
//     setRemCount(remCount - 1);
//     if (isGameOver) {
//       return;
//     } else if (count === 8) {
//       setisGameOver(!isGameOver);
//       setWinMessage("Better Luck Next time");
//       return;
//     }
//     checkGame();
//   };
//   const checkGame = () => {
//     let number = +num;
//     console.log(randomNumber);
//     if (number === randomNumber) {
//       setisGameOver(!isGameOver);
//       setWinMessage(
//         "Congratulations! You won 10000Rs Cash Price" +
//           "        " +
//           "You guessed number in " +
//           count +
//           " Attempts."
//       );
//     } else if (number < randomNumber) {
//       let newNumber1 = randomNumber - number;
//       console.log(newNumber1);
//       if (newNumber1 < 20) {
//         setWinMessage(
//           "Come on! you are nearer try again with big number you have" +
//             remCount +
//             " Attempts more."
//         );
//       } else {
//         setWinMessage(
//           "Your guess is too low try again with big number you have" +
//             remCount +
//             " Attempts more."
//         );
//       }
//     } else if (number > randomNumber) {
//       let newNumber2 = number - randomNumber;
//       console.log(newNumber2);
//       if (newNumber2 < 20) {
//         setWinMessage(
//           "Come on! you are nearer try again with small number you have " +
//             remCount +
//             " Attempts more."
//         );
//       } else {
//         setWinMessage(
//           "Your guess is too high try again with smaller number you have" +
//             remCount +
//             " Attempts more."
//         );
//       }
//     }
//   };
//   const reload = () => {
//     setCount(1);
//     setWinMessage("");
//     setNum("");
//     setRemCount(6);
//     setisGameOver(false);
//     randomNumber = Math.floor(100 * Math.random());
//   };
//   useEffect(function () {
//     ref.current.focus();
//   }, []);
//   return (
//     <div style={style}>
//       <div style={{ width: "47vw" }}>
//         <h2>Enter a number between 0 to 100</h2>
//         <h5>You have 7 chances to match</h5>
//         <input
//           type="number"
//           ref={ref}
//           value={num}
//           onChange={(event) => setNum(event.target.value)}
//         />
//         <div>{winMessage}</div>
//         <div>
//           <Button color="success" onClick={submitButton}>
//             Submit
//           </Button>
//           {isGameOver && (
//             <Button color="success" onClick={reload}>
//               Reload
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//Making it to 1000
let randomNumber = Math.floor(1000 * Math.random());
export default function NumberGuesser() {
  const [num, setNum] = useState("");
  const [winMessage, setWinMessage] = useState("");
  const [count, setCount] = useState(1);
  const [remCount, setRemCount] = useState(9);
  const [isGameOver, setisGameOver] = useState(false);
  let ref = useRef();

  const submitButton = () => {
    setCount(count + 1);
    setRemCount(remCount - 1);
    if (isGameOver) {
      return;
    } else if (count === 11) {
      setisGameOver(!isGameOver);
      setWinMessage("Better Luck Next time");
      return;
    }
    checkGame();
  };
  const checkGame = () => {
    let number = +num;
    console.log(randomNumber);
    if (number === randomNumber) {
      setisGameOver(!isGameOver);
      setWinMessage(
        "Congratulations! You won ₹ 10000 Cash price You have guessed number on " +
          count +
          "Attempt"
      );
    } else if (number < randomNumber) {
      let newNumber1 = randomNumber - number;
      if (newNumber1 < 30) {
        setWinMessage(
          "Come on! you are Extremely nearer try again with bigger number you have " +
            remCount +
            " Attempts more."
        );
      } else if (newNumber1 < 100) {
        setWinMessage(
          "Come on! you are nearer try again with bigger number you have " +
            remCount +
            " Attempts more."
        );
      } else {
        setWinMessage(
          "Your guess is too low try again with bigger number you have " +
            remCount +
            " Attempts more."
        );
      }
    } else if (number > randomNumber) {
      let newNumber2 = number - randomNumber;
      if (newNumber2 < 30) {
        setWinMessage(
          "Come on! you are Extremely nearer try again with smaller number you have " +
            remCount +
            " Attempts more."
        );
      } else if (newNumber2 < 100) {
        setWinMessage(
          "Come on! you are nearer try again with smaller number you have " +
            remCount +
            " Attempts more."
        );
      } else {
        setWinMessage(
          "Your guess is too high try again with smaller number you have " +
            remCount +
            " Attempts more."
        );
      }
    }
  };
  const reload = () => {
    setCount(1);
    setWinMessage("");
    setNum("");
    setRemCount(9);
    setisGameOver(false);
    randomNumber = Math.floor(1000 * Math.random());
  };
  useEffect(function () {
    ref.current.focus();
  }, []);
  return (
    <div className="container">
      <div className="header">Guess the Secret Number</div>
      <div className="game-container">
        <h2>Enter a number between 0 to 1000</h2>

        <h5>You have 10 chances to match</h5>
        <input
          type="number"
          ref={ref}
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
        <div>{winMessage}</div>
        <div>
          <Button color="success" onClick={submitButton}>
            Submit
          </Button>
          {isGameOver && (
            <Button color="success" onClick={reload}>
              Reload
            </Button>
          )}
        </div>
        <div className="howToPlay">
          <h2>How to Play</h2>
          <ul>
            <li>
              The website will pick a secret number and put it in his hat.
            </li>
            <li>You guess what number it is.</li>
            <li>
              If your guess is too far or nearer or extremely nearer it will
              give you a hint.
            </li>
            <li>
              If difference below 100 it shows nearer, If difference is below 30
              it shows extremely nearer.
            </li>
            <li>See how many turns it takes you to win.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// let randomNumber=Math.floor(1000*Math.random());
// export default function NumberGuesser(){
//   const [Num,setNum]=useState("");
//   const [count,setCount]=useState(1);
//   const [isGameOver,setisGameOver]=useState(false);
//   const [remCount,setRemCount]=useState(9);
//   const [winMessage,setWinMessage]=useState("")

//   const submitButton=()=>{
//     setCount(count+1);
//     setRemCount(remCount-1);
//     if(isGameOver){
//       return;
//     }else if(count===11){
//       setisGameOver(!isGameOver);
//       setWinMessage("Better luck next time");
//       return;
//     }
//     checkGame();
//   }
//   const checkGame=()=>{
//     let number=+Num;
//     console.log(randomNumber);
//     if(number===randomNumber){
//       setisGameOver(!isGameOver);
//       setWinMessage(""+count+"Attempt");
//     }else if(number<randomNumber){

//     }
//   }

//   return(
//     <div>
//     <input type="text" value={Num}  onChange={(event)=>setNum(event.target.value)}/>
//     <button onClick={submitButton}>Submit</button>
//     {isGameOver&&<button onClick={}>Reload</button>}
//     </div>
//   );
// }
