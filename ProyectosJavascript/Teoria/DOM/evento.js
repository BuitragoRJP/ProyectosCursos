const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", (e) => {
    e.stopPropagation();
    const elemento = document.querySelector(".caja");
    elemento.classList.toggle("activa");
});


