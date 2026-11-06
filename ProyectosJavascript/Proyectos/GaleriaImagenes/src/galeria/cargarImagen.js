import data from "../data/fotos";
const galeria = document.getElementById("galeria");
const cargarImagen = (id, nombre, ruta, descipcion) => {
    galeria.querySelector(".galeria__imagen").src = ruta;
    galeria.querySelector(".galeria__imagen").dataset.id = id;
    galeria.querySelector(".galeria__titulo").innerHTML = nombre;
    galeria.querySelector(".galeria__descripcion-imagen-activa").innerHTML = descipcion;


    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexActual;
    fotos.forEach((foto, index) => {
        if(foto.id === id){
            indexActual = index;
        }
    });
    if(galeria.querySelectorAll(".galeria__carousel-slide").length > 0){
        galeria.querySelector(".galeria__carousel-slide--active").classList.remove("galeria__carousel-slide--active");
        galeria.querySelectorAll(".galeria__carousel-slide")[indexActual].classList.add("galeria__carousel-slide--active");
    }
    
};

const cargarAnteriorSiguiente = (direccion) =>{
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idActual = parseInt(galeria.querySelector(".galeria__imagen").dataset.id);
    let indexActual;
    fotos.forEach((foto, index) => {
        if(foto.id === idActual){
            indexActual = index;
        }
    });
    if(direccion === "siguiente"){
        if(fotos[indexActual + 1]){
            const {id, nombre, ruta, descipcion} = fotos[indexActual + 1];
            cargarImagen(id, nombre, ruta, descipcion);
        }
    } else if(direccion === "anterior"){
        if(fotos[indexActual - 1]){
            const {id, nombre, ruta, descipcion} = fotos[indexActual - 1];
            cargarImagen(id, nombre, ruta, descipcion);
        }
    }
};

export {cargarImagen, cargarAnteriorSiguiente};