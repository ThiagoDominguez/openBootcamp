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
    <div className="container-time">
      <h2 className="container-hour">
        Hora actual:
        {dato.fecha.toLocaleTimeString()}
      </h2>
      <h3 className="container-info">
        {dato.nombre} {dato.apellido}
      </h3>
      <h1 className="container-age">Edad:{dato.edad}</h1>
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
