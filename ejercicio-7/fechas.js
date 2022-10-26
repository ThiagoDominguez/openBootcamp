const fechaHoy = new Date();

const fecNac = new Date(2001, 7, 31);

let fechas = fechaHoy.getTime() > fecNac.getTime();

let mesNac = fecNac.getMonth() + 1;
let añoNac = fecNac.getFullYear();
