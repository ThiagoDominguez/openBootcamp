export class ContactosClass {
  nombre = "";
  apellido = "";
  email = "";
  estado = false;
  constructor(nombre, apellido, email, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.estado = estado;
  }
}
