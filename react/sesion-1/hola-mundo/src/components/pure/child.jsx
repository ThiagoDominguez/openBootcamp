import React, { useRef } from "react";

export const Child = ({ name, enviar, formName }) => {
  const mensajeReferencia = useRef("");
  const nombreFormulario = useRef("");

  function pulsarBoton() {
    const texto = mensajeReferencia.current.value;
    alert(texto);
  }

  function pulsarBotonParams(text) {
    alert(`Texto: ${text}`);
  }

  function submitForm(e) {
    e.preventDefault();
    formName(nombreFormulario.current.value);
  }
  return (
    <div style={{ backgroundColor: "beige" }}>
      <p onMouseOver={() => console.log("Mouse Over")}>Hello, {name} </p>
      <button onClick={() => console.log("Boton 1 pulsado")}>boton 1</button>
      <button onClick={pulsarBoton}>boton 2</button>
      {/* //! Para poder pasar parametros en una funcion que queremos que se ejecute desde un evento , debemos pasar la funcion dentro de una funcion anonima , sino hacemos esto va a buscar ejecutarse cuando recargue la pagina */}
      <button onClick={() => pulsarBotonParams("Hola")}>boton 3</button>

      <input
        placeholder="Introduce un texto"
        onFocus={() => console.log("Focus")}
        onChange={(e) => console.log(`Input ${e.target.value}`)}
        onCopy={() => console.log("Texto copiado desde el input")}
        ref={mensajeReferencia}
      />
      {/* //! Para recibir la funcion "enviar" en el padre debemos pasarle desde el padre al componente react hijo como prop "enviar" */}
      <button onClick={() => enviar(mensajeReferencia.current.value)}>
        Enviar Mensaje
      </button>
      <div style={{ marginTop: "1rem", backgroundColor: "lightcoral" }}>
        <form onSubmit={submitForm}>
          <input ref={nombreFormulario} placeholder="Inserta tu nombre" />
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
};
