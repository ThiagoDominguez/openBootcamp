// Ejemplo de uso de los siguientes hooks,
// useState()
// useRef()
// useEffect()

import React, { useEffect, useRef, useState } from "react";

export const Ejemplo2 = () => {
  // Vamos a crear 2 contadores distintos ,cada uno en un stado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef para asociar una variable con un evento del dom del componente

  const miRef = useRef();

  function incrementa1() {
    setContador1(contador1 + 1);
  }
  function incrementa2() {
    setContador2(contador2 + 1);
  }

  // Trabajando con useEffect

  // Caso 1: Ejecutar siempre un snippet de codigo
  // Cada vez que haya un cambio en el estado de un componente se ejecuta aquello que este dentro del useEffect()
  // useEffect(() => {
  //   console.log("cambio en el estado del componente");
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // });

  // Caso 2: ejecutar solo en algunos casos
  // Cada vez que cambie el contador 1 , se ejecuta lo que diga el useEffect

  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("Mostrando referencia al elemento del DOM");
  //   console.log(miRef);
  // }, [contador1]);

  // Caso 3: ejecutar solo cuando haya un cambio en contador  1 o contador 2
  // Cada vez que cambie el contador 1 , se ejecuta lo que diga el useEffect

  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia al elemento del DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState,useRef,useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementa1}>Incrementar contador 1</button>
        <button onClick={incrementa2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};
