import React from "react";

export default class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      name: "",
    };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("The value of the input is " + this.state.name);
    this.setState({ name: "" });
  };
  componentDidMount() {
    this.ref.current.focus();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.ref}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
