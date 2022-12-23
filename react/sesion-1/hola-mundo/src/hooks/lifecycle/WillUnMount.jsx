// Se utiliza cuando el componente va a desaparecer

import React, { Component, useEffect } from "react";

export default class WillUnmount extends Component {
  componentWillUnmount() {
    console.log(
      "Comportamiento antes de que el componente desaparezca (clases)"
    );
  }

  render() {
    return <div>WillUnmountClases</div>;
  }
}

// En este caso debemos pasar el console.log dentro del return y no por fuera como en los otros casos
export const WillUnmountHook = () => {
  useEffect(() => {
    return () => {
      console.log(
        "Comportamiento antes de que el componente desaparezca (Funciones)"
      );
    };
  }, []);
  return <div>WillUnmountFunciones</div>;
};
