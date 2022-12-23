// Componente que va a contener un formulario para autenticacion de usuarios

import React, { useState } from "react";

export const LoginForm = () => {
  const credencialesUsuario = {
    user: "",
    pass: "",
  };
  const [credenciales, setCredenciales] = useState(credencialesUsuario);
  return <div>loginForm</div>;
};
