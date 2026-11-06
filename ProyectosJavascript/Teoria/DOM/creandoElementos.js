const agregarCaja = () => {
    const newCaja = document.createElement("div");
    newCaja.innerHTML = "nueva caja";
    newCaja.setAttribute("id", "nuevaCaja");
    newCaja.setAttribute("class", "caja activa");

    const contenedor = document.querySelector("#contenedor1");
    //contenedor.appendChild(newCaja); // Agrega al final del contenedor

    contenedor.insertAdjacentElement("afterbegin", newCaja); // Agrega al inicio del contenedor
    //contenedor.insertAdjacentElement("beforeend", newCaja); // Agrega al final del contenedor
    //const cajaExistente = document.querySelectorAll("#contenedor1 .caja");
    //cajaExistente.replaceWith(newCaja); // Reemplaza la caja existente con la nueva caja

    //contenedor.insertBefore(newCaja, cajaExistente[2]); // Agrega al inicio del contenedor
};

const eliminarCaja = () => {
    const contenedor = document.querySelector("#contenedor1");
    const cajaAEliminar = contenedor.querySelector(".caja");

    contenedor.removeChild(cajaAEliminar);
};