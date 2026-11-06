'use strict';

const producto$1 = document.getElementById("producto");
const productoImagen = producto$1.querySelector(".producto__imagen");
const thumbs = producto$1.querySelector(".producto__thumbs");

//COLOR
const propiedadColor = producto$1.querySelector("#propiedad-color");

//CANTIDAD
const btnIncrementar = producto$1.querySelector("#incrementar-cantidad");
const btnDisminiur = producto$1.querySelector("#disminuir-cantidad");
const inputCantidad = producto$1.querySelector("#cantidad");

thumbs.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        const imagenSrc = e.target.src;
        const nombreImagen = imagenSrc.substring(imagenSrc.lastIndexOf("/") + 1);
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});

propiedadColor.addEventListener("click", (e) =>{
    if(e.target.tagName === "INPUT"){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
});

btnIncrementar.addEventListener("click", (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminiur.addEventListener("click", (e) => {
    if(parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

const btnAbrirCarrito = document.querySelectorAll("[data-accion='abrir-carrito']");
const btnCerrarCarrito = document.querySelectorAll("[data-accion='cerrar-carrito']");
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById("agregar-al-carrito");
const producto = document.getElementById("producto");

const renderCarrito = () => {
    ventanaCarrito.classList.add("carrito--active");

    // ciclo para revisar productos en el carrito
        //plantilla html paraproductos 477
        //crear el elemento para los productos
        //añadir al elemento la plantilla modificada
        //agregar el elemento al carrito
};

//abrir carrito
btnAbrirCarrito.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        renderCarrito();
    });
});

//cerrar carrito
btnCerrarCarrito.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        ventanaCarrito.classList.remove("carrito--active");
    });
});

//agregar carrito
btnAgregarCarrito.addEventListener("click", (e) => {
    producto.dataset.productoId;
    parseInt(producto.querySelector("#cantidad").value);
    producto.querySelector(".producto__nombre").innerText;
    producto.querySelector("#porpiedad-color input:checked").value;
    producto.querySelector("#porpiedad-tamaño input:checked").value;


});
