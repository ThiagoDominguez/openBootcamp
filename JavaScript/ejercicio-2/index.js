let name = "Thiago Dominguez";
let edad = 21;
let desarrollador = true;

let fecNac = new Date(2001, 7, 31);

// No tengo un libro favorito asi que voy a simular uno :)

const libro = {
  titulo: "El Libro null",
  autor: "Yo",
  fecha: new Date(),
  url: "https://github.com/ThiagoDominguez",
};

// Esto va por fuera del ejercicio de OpenBootCamp
console.log(libro);

for (const key in libro) {
  console.log(`${key}: ${libro[key]}`);
}
