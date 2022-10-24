const listaCompras = ["Harina", "Shampoo", "Huevos", "Chocolate", "Vino"];
listaCompras.push("Aceite de Girasol");

listaCompras.pop();

const peliculasFav = [
  {
    titulo: "Shrek 3",
    director: "Chris Miller",
    fecha: new Date(2007, 04, 18),
  },
  {
    titulo: "El Camino: A Breaking Bad Movie",
    director: "Vince Gilligan",
    fecha: new Date(2019, 09, 11),
  },
  {
    titulo: "Proyecto X",
    director: "Nima Nourizadeh",
    fecha: new Date(2012, 02, 02),
  },
];

const nextTo2010 = peliculasFav.filter(
  (valor) => valor.fecha > new Date(2010, 0, 1)
);

console.log(nextTo2010);

const directores = peliculasFav.map((pelicula) => pelicula.director);

console.log(directores);

const titulos = peliculasFav.map((pelicula) => pelicula.titulo);

console.log(titulos);

const titulos_directores = directores.concat(titulos);

console.log(titulos_directores);

const directoresTitulos = [...directores, ...titulos];

console.log(directoresTitulos);
