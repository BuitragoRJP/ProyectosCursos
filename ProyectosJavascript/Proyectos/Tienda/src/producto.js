
const producto = document.getElementById("producto");
const productoImagen = producto.querySelector(".producto__imagen");
const thumbs = producto.querySelector(".producto__thumbs");

//COLOR
const propiedadColor = producto.querySelector("#propiedad-color");

//CANTIDAD
const btnIncrementar = producto.querySelector("#incrementar-cantidad");
const btnDisminiur = producto.querySelector("#disminuir-cantidad");
const inputCantidad = producto.querySelector("#cantidad");

thumbs.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        const imagenSrc = e.target.src;
        const nombreImagen = imagenSrc.substring(imagenSrc.lastIndexOf("/") + 1);
        productoImagen.src = `./img/tennis/${nombreImagen}`
    }
});

propiedadColor.addEventListener("click", (e) =>{
    if(e.target.tagName === "INPUT"){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`
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