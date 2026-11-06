const objetoById = document.getElementById("contenedor1");
console.log(objetoById); 
console.log(objetoById.children);
console.log(objetoById.parentElement);

const objetoByClass = document.getElementsByClassName("contenedor2");
const objetoByTag = document.getElementsByTagName("div");


const objetoByQuerySelector = document.querySelector("#contenedor1 .caja");
const objetoByQuerySelectorAll = document.querySelectorAll("#contenedor2 .caja");

console.log(objetoByQuerySelector);
console.log(objetoByQuerySelectorAll);

console.log(objetoByQuerySelectorAll[2].closest(".contenedor-principal"));