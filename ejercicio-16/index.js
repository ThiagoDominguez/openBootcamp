const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (e) => {
    console.log("Arrastrando");
    parrafo.classList.add("dragging");
    e.dataTransfer.setData("id", parrafo.id);
  });
  parrafo.addEventListener("dragend", (e) => {
    console.log("Soltando");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  seccion.addEventListener("drop", (e) => {
    console.log("drop");
    const id_parrafo = e.dataTransfer.getData("id");
    console.log(id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

papelera.addEventListener("dragover", (e) => {
  e.preventDefault();
});

papelera.addEventListener("drop", (e) => {
  const id_parrafo = e.dataTransfer.getData("id");
  confirm("Estas seguro de remover ese parrafo? " + id_parrafo);
  if (confirm) {
    document.getElementById(id_parrafo).remove();
  }
});
