// Componente que va a contener formulario de registro

import React, { useState } from "react";

export const RegisterForm = () => {
  const credencialesUsuario = {
    user: "",
    name: "",
    email: "",
    pass: "",
  };
  const [credenciales, setCredenciales] = useState(credencialesUsuario);

  return <div>registerForm</div>;
};
