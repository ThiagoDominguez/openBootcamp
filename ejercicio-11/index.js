class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = ["JavaScript", "HTML", "CSS"];
  }
  obtenDatos() {
    console.log(`Estudiante: ${this.nombre}, asignaturas: ${this.asignaturas}`);
  }
}

const est1 = new Estudiante("Thiago");

est1.obtenDatos();
