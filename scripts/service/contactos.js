import { APPIS } from "../modulos/appi.js";
import { pintarHome } from "../modulos/direccionamientoPag.js";

export const trayendoContactos = async() => {
    let nuevosContactos = [];
    try {
        const {data} = await axios.get(APPIS.URL_USUARIOS)
       
        data.forEach(element => {

            const llamarContactos = {
                Foto: element.Foto,
                Nombre: element.Nombre,
            }

            nuevosContactos.push(llamarContactos)
            
    });
    pintarHome(nuevosContactos);
    
    } catch (error) {
        // console.log(error);
    }
    
}

// const CargarTarjeta = () => {
    
//     const contenedorTarjetas = document.getElementById('contenedor_contactos');
    
//     contenedorTarjetas.innerHTML = ``;
//     nuevosContactos.forEach(element =>{
//         contenedorTarjetas.innerHTML += `
//         <div class="tarjeta_contacto">
 
//         <article class="union_foto_contacto">
//             <img class="foto_contacto" src=${element.Foto} alt="contacto1">
//         </article>

//         <article class="union_mensaje">
//             <article class="nombre_dia_mensaje">
//                 <span class="nombre_contacto">${element.Nombre}</span>
//                 <span class="dia_mensaje">Viernes</span>
//             </article>

//             <article class="icono_texto_mensaje">
//                 <img class="icono_ckeck" src="../data/Icons/check.svg" alt="check">
//                 <p class="mensaje_contacto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </article>
//         </article>
       
//         </div>  
//         `
//     });

// }


