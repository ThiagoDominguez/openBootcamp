import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = (estado) => {
  const [connect, setConnect] = useState(estado);
  return (
    <div>
      <h3>{connect === false ? "Desconectado" : "Conectado"}</h3>
      <button onClick={() => setConnect(!connect)}>
        {connect === false ? "Conectado" : "Desconectado"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
