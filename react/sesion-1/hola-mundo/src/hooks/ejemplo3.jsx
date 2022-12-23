// Ejemplo hooks
// useContext
// useState

import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

// Componente 1 dispone de un contexto que va a tener un valor que recibe desde el padre
export const Componente1 = () => {
  // Inicializamos un estado vacio que va a rellenarse con los datos del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
};

export const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La session es : {state.session}</h2>
    </div>
  );
};

export const ComponenteContexto = () => {
  const estadoInicial = {
    token: 1234567,
    session: 1,
  };
  // Crear estado de este componente

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({
      token: "qwerty",
      session: sessionData.session + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de session data */}
      {/* Si se actualiza , los componentes de aqui tambien se actualizan */}
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSession}>Actualiza Session</button>
    </miContexto.Provider>
  );
};
