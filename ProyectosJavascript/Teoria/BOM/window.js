let ventana;
const abrir = () => {
    ventana = window.open("file:///C:/Users/Juan2/OneDrive/Escritorio/ProyectosCursos/ProyectosJavascript/Teoria/BOM/index.html",
        "Mi Nueva Ventana", 
        "height=800px,width= 800px"
    );
    ventana.document.write("<h1>Hola Mundo</h1>");
};

const cerrar = () => {
    ventana.close();
};

// screen object

const ancho = window.screen.width;
const alto = window.screen.height;
console.log(`El ancho de la pantalla es: ${ancho}`);
console.log(`El alto de la pantalla es: ${alto}`);

console.log(`El ancho de la ventana es: ${window.innerWidth}`);
console.log(`El alto de la ventana es: ${window.innerHeight}`);

console.log(`El ancho de la ventana es: ${window.screen.availWidth}`);
console.log(`El alto de la ventana es: ${window.screen.availHeight}`);