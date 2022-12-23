// Ejemplo de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional

import React, { Component, useEffect } from "react";

export default class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente se renderice en el DOM(Clases)"
    );
  }

  render() {
    return <div>DidMountClases</div>;
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente se renderice en el DOM (Funciones)"
    );
  }, []);
  return <div>DidMountFunciones</div>;
};
