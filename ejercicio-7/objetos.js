const datosPers = [
  {
    nombre: "Thiago",
    apellido: "Dominguez",
    edad: 21,
    altura: 1.71,
    isDeveloper: true,
  },
];

let edad = datosPers.edad;

const datosFriends = [
  ...datosPers,
  {
    nombre: "Nazaret",
    apellido: "Capará",
    edad: 19,
    altura: 1.65,
    isDeveloper: false,
  },
  {
    nombre: "Daiana",
    apellido: "Chavez",
    edad: 20,
    altura: 1.62,
    isDeveloper: false,
  },
];

const ordenarDatos = datosFriends.sort((a, b) => b.edad - a.edad);
