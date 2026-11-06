import datos from "../data/fotos.js";
import { cargarImagen } from "./cargarImagen";
const slideClick = (e, categoria) => {
    const id = e.target.dataset.id;
    datos.fotos[categoria].forEach(foto => {
        if(foto.id == id){
            const {nombre, ruta, descripcion} = foto
            cargarImagen(id, nombre, ruta, descripcion);
        }
    });
};

export default slideClick;