import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>HOLA {this.props.name} </h1>
        <h2> Tu edad es de :{this.state.age} </h2>
        <div>
          <button onClick={this.bday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  bday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}

Greeting.protoTypes = {
  name: PropTypes.string,
};

export default Greeting;
