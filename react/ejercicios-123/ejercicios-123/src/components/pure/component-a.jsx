import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";
import ComponentB from "./component-b";

const ComponentA = ({ contacto }) => {
  return (
    <div>
      <div>
        <h1>Nombre: {contacto.nombre}</h1>
        <h1>Apellido:{contacto.apellido} </h1>
        <h2>Email: {contacto.email}</h2>
      </div>
      <ComponentB estado={true}></ComponentB>
    </div>
  );
};

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponentA;
