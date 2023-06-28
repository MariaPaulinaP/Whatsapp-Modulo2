

import { fotoPerfil, espacioContactos, ContenedorEditarPerfil, hijo1, contenedorTarjetas, hijos, nuevoHijo, atras, nombrePerfil } from "../modulos/elementsDom.js";

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
        hijos.classList.remove("perfil")
        hijos.classList.add("contenedor_perfil")
    
    });

    atras.addEventListener("click", () => {
        console.log("el boton atras");
        hijos.classList.remove("contenedor_perfil")
        hijos.classList.add("perfil")

        hijo1.classList.add("contenedor_buscar")
        hijo1.classList.remove("oculta")

        contenedorTarjetas.classList.remove("ocultas")
        contenedorTarjetas.classList.add("contenedor_contactos")
    })
}; 

// const editarPerfil = async() => {
// //     atras.addEventListener("click", () => {
// //     nombrePerfil.
// //     })
// }
