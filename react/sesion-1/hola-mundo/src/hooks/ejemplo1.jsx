//Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función. Los hooks no funcionan dentro de las clases — te permiten usar React sin clases.

// Ejemplo del uso del hook useState

// Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas, poder modificarlo

import React, { useState } from "react";
// El nombre del componente tipo funcion debe ser siempre con la primer letra en mayuscula
export const Ejemplo1 = () => {
  // valor inicial para contador

  const cont = 0;

  // valor inicial para persona
  const persona = {
    nombre: "Thiago",
    email: "thiagodominguez4@gmail.com",
  };

  // Queremos que el contador y persona sean parte del estado del componente para asi poder gestionar su cambio poder gestionar que este se vea reflejado en la vista del componente

  // const [nombreVariable,FuncionParaCambiar]=useState(valorInicial)

  const [contador, setContador] = useState(cont);
  const [pers, setPers] = useState(persona);

  // Funcion para actualizar el estado privado que contiene el contador

  function incrementarCont() {
    setContador(contador + 1);
  }

  // Funcion para actualizar el estado de persona

  function actualizarPersona() {
    setPers({
      nombre: "Daiana",
      email: "daichavex@gmail.com",
    });
  }
  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona </h2>
      <h3>Nombre: {pers.nombre}</h3>
      <h3>Email: {pers.email}</h3>
      <div>
        <button onClick={incrementarCont}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
        {/* <button></button> */}
      </div>
    </div>
  );
};
