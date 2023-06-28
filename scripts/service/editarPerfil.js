// import { fotoPerfil } from "../modulos/elementsDom.js";


import { fotoPerfil, espacioContactos, ContenedorEditarPerfil, hijo1, contenedorTarjetas, hijos, nuevoHijo } from "../modulos/elementsDom.js";

// document.addEventListener('click', (e) =>{
//     if(e.target.classList.contains("foto_perfil"))
//     AccionMostrar.classList.toggle("oculta");  
// })

export const agregandoPerfil = () => {
    fotoPerfil.addEventListener("click", () => {
        console.log("hola");
        hijo1.classList.add("oculta")
        hijo1.classList.remove("contenedor_buscar")
        contenedorTarjetas.classList.add("ocultas")
        contenedorTarjetas.classList.remove("contenedor_contactos")
       
    });
}; 

