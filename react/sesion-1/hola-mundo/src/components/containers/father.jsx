import React, { useState } from "react";
import { Child } from "../pure/child";

export const Father = () => {
  const [nombreForm, setNombreForm] = useState("");

  function mostarMensaje(text) {
    alert(text);
  }

  function mostarNombre(formName) {
    setNombreForm(formName);
  }

  return (
    <div style={{ backgroundColor: "chartreuse", padding: "2rem" }}>
      <Child
        enviar={mostarMensaje}
        name={nombreForm}
        formName={mostarNombre}
      ></Child>
    </div>
  );
};
