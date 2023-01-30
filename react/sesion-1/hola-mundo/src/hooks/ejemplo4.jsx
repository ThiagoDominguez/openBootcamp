// Ejemplo para entender el uso de props.children

import React from "react";
// Siempre pasar como parametros props , para poder acceder a ellas
export const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo de children props</h1>
      <h2>Nombre: {props.nombre}</h2>

      {/* props.children pintarapor defecto aquello que se encuentre por defecto entre las aperturas de cierre de este componente desde el componente padre*/}
      {props.children}
    </div>
  );
};
