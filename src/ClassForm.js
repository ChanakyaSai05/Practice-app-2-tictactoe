// import React from "react";

// export default class ClassForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: " ",
//     };
//   }
//   handleClick = (event) => {
//     this.setState({ value: event.target.value });
//   };
//   submit = (event) => {
//     event.preventDefault();
//     alert(`My name is ${this.state.value}`);
//   };
//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleClick}
//             />
//             <button type="submit" onClick={this.submit}>
//               submit
//             </button>
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

//same thing as above but this is with onSubmit on form
//and slight modification is after alert settign the state to an empty string.
// export default class ClassForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//     this.state = {
//       value: "",
//     };
//   }
//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };
//   submit = (event) => {
//     event.preventDefault();
//     // alert(`My name is ${this.state.value}`);
//     // this.setState({ value: "" });
//     alert(`My Name is : ${this.input.current.value}`);
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submit}>
//           <label>
//             <input
//               type="text"
//               ref={this.input}
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </label>
//         </form>
//       </div>
//     );
//   }
//

import React from "react";
export default class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  submit = (event) => {
    event.preventDefault();
    alert(`My name is ${this.input.current.value}`);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          ref={this.input}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.submit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
