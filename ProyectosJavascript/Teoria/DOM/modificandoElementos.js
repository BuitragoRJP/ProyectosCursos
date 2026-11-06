const caja1 = document.querySelector('.caja');

caja1.innerHTML = 'Hola Mundo';

caja1.id = 'caja1';
caja1.className = 'caja-modificada';


caja1.setAttribute('data-atributo', 'valor');
console.log(caja1);

const caja2 = document.querySelector('#contenedor2 .caja');
caja2.style.color = 'white';
caja2.style.backgroundColor = 'blue';
caja2.style.fontSize = '20px';
caja2.style.padding = '10px';
caja2.style.textTransform = 'uppercase';