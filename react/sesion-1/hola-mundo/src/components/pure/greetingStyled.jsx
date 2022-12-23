import React, { useState } from "react";

// definiendo estilos en constantes

const loggedStyle = {
  color: "white",
};
const unLoggedStyle = {
  color: "red",
  fontWeight: "bold",
};

export const GreetingStyled = (props) => {
  // Generamos estado para componente y controlar si el usuario esta logueado o no

  const [logged, setLogged] = useState(false);

  const greetingUser = <p>Hola, {props.name}</p>;

  const iniciaSesion = <p>Inicia Sesion</p>;

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      {logged ? greetingUser : iniciaSesion}
      <button
        onClick={() => {
          console.log("Boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "logout" : "login"}
      </button>
    </div>
  );
};
