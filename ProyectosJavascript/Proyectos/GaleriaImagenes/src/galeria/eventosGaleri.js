import cerrarGaleria from "./cerrarGaleria.js";
import slideClick from "./slideClick.js";
import {cargarAnteriorSiguiente} from "./cargarImagen.js";
import carousel from "./carousel.js";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
    const boton = e.target.closest("button");

    //cerrar galeria
    if(boton?.dataset?.accion === "cerrar-galeria"){
        cerrarGaleria();
    }

    //cambiar imagen cliceando la imagen
    if(e.target.dataset.id){
        slideClick(e, galeria.dataset.categoria);
    }

    //siguiente imagen
    if(boton?.dataset?.accion === "siguiente-imagen"){
        cargarAnteriorSiguiente("siguiente");
    }

    //anterior imagen
    if(boton?.dataset?.accion === "anterior-imagen"){
        cargarAnteriorSiguiente("anterior");
    }

    //siguiente slide
    if(boton?.dataset?.accion === "siguiente-slide"){
        carousel("siguiente");
    }

    //anterior slide
    if(boton?.dataset?.accion === "anterior-slide"){
        carousel("anterior");
    }


});