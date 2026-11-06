const llamarTiempo = () => {
    console.log("Han pasado 1000 ms");
};

let id;

const activarTemp = () => {
    id = setTimeout(llamarTiempo, 5000);
};

const desactivarTemp = () => {
    clearTimeout(id);
    console.log("Se ha detenido el temporizador");
}



setInterval(() => {
    console.log("Han pasado 1000 ms");
}, 1000);