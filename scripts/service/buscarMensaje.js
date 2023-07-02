import { buscarMensaje, iconoBuscar, equis } from "../modulos/elementsDom.js";

export const buscadorMensajes = () => {
    iconoBuscar.addEventListener("click", () => {
        buscarMensaje.classList.remove("section__buscar");
        buscarMensaje.classList.add("verBuscar");
    })
    equis.addEventListener("click", () => {
        buscarMensaje.classList.add("section__buscar");
        buscarMensaje.classList.remove("verBuscar");
    })
}


