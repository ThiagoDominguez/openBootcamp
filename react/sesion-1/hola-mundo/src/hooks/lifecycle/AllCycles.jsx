import React, { useEffect } from "react";

export const AllCycles = () => {
  useEffect(() => {
    console.log("Componente actualizado");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Actualizacion del componente");
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "El tiempo se ha detenido";

      clearInterval(intervalID);
    };
  }, []);
  return <div>AllCycles</div>;
};
