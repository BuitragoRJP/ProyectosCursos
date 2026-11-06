const activarClase = () => {
    const elemento = document.querySelector(".caja");
    elemento.classList.add("activa");
};

const eliminarClase = () => {
    const elemento = document.querySelector(".caja");
    elemento.classList.remove("activa");
};

const toggleClase = () => {
    const elemento = document.querySelector(".caja");
    elemento.classList.toggle("activa");
};

const containsClase = () => {
    const elemento = document.querySelector(".caja");
    if (elemento.classList.contains("activa")) {
        console.log("La clase 'activa' está presente en el elemento.");
    }else {
        console.log("La clase 'activa' NO está presente en el elemento.");
    }
    const lista = elemento.classList;
    console.log("Lista de clases del elemento:", lista);
};