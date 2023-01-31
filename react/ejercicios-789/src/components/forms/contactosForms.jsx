import React, { useRef } from "react";

const ContactosForms = ({ onAddContact }) => {
  const name = useRef("");
  const email = useRef("");

  function addContact(e) {
    e.preventDefault();

    const newContact = {
      nombre: name.current.value,
      email: email.current.value,
    };

    onAddContact(newContact);
    name.current.value = "";
    email.current.value = "";
  }

  return (
    <form onSubmit={addContact} className="contact-component">
      <h2>Añadir Contacto: </h2>
      <input
        ref={name}
        name="name"
        placeholder="Nombre Contacto"
        className="form-control"
      />
      <input
        ref={email}
        name="email"
        placeholder="Email Contacto"
        className="form-control"
      />
      <button onClick={addContact} type="submit" className="submite-button">
        Añadir
      </button>
    </form>
  );
};

export default ContactosForms;
