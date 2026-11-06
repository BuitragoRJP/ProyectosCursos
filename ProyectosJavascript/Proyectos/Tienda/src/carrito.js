const btnAbrirCarrito = document.querySelectorAll("[data-accion='abrir-carrito']");
const btnCerrarCarrito = document.querySelectorAll("[data-accion='cerrar-carrito']");
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById("agregar-al-carrito");
const producto = document.getElementById("producto");
const carrito = [];

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
    const id = producto.dataset.productoId;
    const cantidad = parseInt(producto.querySelector("#cantidad").value);
    const nombre = producto.querySelector(".producto__nombre").innerText;
    const color = producto.querySelector("#porpiedad-color input:checked").value;
    const tamano = producto.querySelector("#porpiedad-tamaño input:checked").value;

    carrito.push({
        id:id,
        nombre:nombre,
        cantidad:cantidad,
        color:color,
        tamano:tamano,
    });


});