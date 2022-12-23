//

import React, { Component, useEffect } from "react";

export default class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props y cambios en su estado privado(Clases)"
    );
  }
  render() {
    return <div>DidUpdateClases</div>;
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props y cambios en su estado privado(Funciones)"
    );
  });
  return <div>DidUpdateFunciones</div>;
};
