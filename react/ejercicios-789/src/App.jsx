import "./App.css";
import React, { useState, useEffect } from "react";
import Contactos from "./components/contactos";
import ContactosForms from "./components/forms/contactosForms";

function App() {
  const defaultContact = [
    { nombre: "Jose", email: "Jose@gmail.com", conectado: true },
    { nombre: "Maria", email: "Maria@gmail.com", conectado: false },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);
  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].conectado = !tempContact[index].conectado;
    setNuevoContacto(tempContact);
  }
  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }
  return (
    <div className="App">
      <h1>Contactos</h1>
      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <Contactos
              key={index}
              contacto={contacto}
              changeState={changeState}
              remove={remove}
            />
          );
        })}
      </div>
      <ContactosForms onAddContact={addContact}></ContactosForms>
    </div>
  );
}

export default App;
