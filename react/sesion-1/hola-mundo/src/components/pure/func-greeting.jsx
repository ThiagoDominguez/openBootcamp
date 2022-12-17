import React, { useState } from "react";
import PropTypes from "prop-types";

const Funcgreeting = (props) => {
  // Introduccion a useState()
  const [age, setAge] = useState(21);

  const bday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>HOLA {props.name},desde componente funcional</h1>
      <h2>tu edad es de: {age}</h2>
      <button onClick={bday}>Crecer</button>
    </div>
  );
};

Funcgreeting.propTypes = {
  name: PropTypes.string,
};

export default Funcgreeting;
