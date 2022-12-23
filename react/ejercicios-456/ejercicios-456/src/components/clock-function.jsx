import React, { useState, useEffect } from "react";

export const ClockFunction = () => {
  const datos = {
    fecha: new Date(),
    nombre: "Thiago",
    apellido: "Dominguez",
    edad: 21,
  };

  const [dato, setDato] = useState(datos);

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h2>
        Hora actual:
        {dato.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {dato.nombre} {dato.apellido}
      </h3>
      <h1>Edad:{dato.edad}</h1>
    </div>
  );
  function tick() {
    setDato({
      nombre: dato.nombre,
      apellido: dato.apellido,
      fecha: new Date(),
      edad: dato.edad++,
    });
  }
};
