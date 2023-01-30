import React, { useState } from "react";
import { ContactosClass } from "../models/contactosclass";

const ListaContactos = (props) => {
  const nuevoContacto = new ContactosClass(
    "Thiago",
    "Dominguez",
    "thiago@gmail.com",
    false
  );

  const [contactos, setContactos] = useState(nuevoContacto);

  const [estadoContacto, setEstadoContacto] = useState(nuevoContacto.estado);
  // setContactos(contactos);

  function cambiarConexion() {
    setEstadoContacto(!estadoContacto);
  }

  return (
    <div>
      <h1>{nuevoContacto.nombre}</h1>
      <h1>{nuevoContacto.apellido}</h1>
      <h1>{nuevoContacto.email}</h1>
      <h1>{estadoContacto ? "Conectado" : "Desconectado"}</h1>
      <button onClick={cambiarConexion}>Cambiar Conexion</button>
    </div>
  );
};

export default ListaContactos;
