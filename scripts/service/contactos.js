import { APPIS } from "../modulos/appi.js";
import { contenedorTarjetas, fotoChat, principalContenedor, inputContacto } 
from "../modulos/elementsDom.js";
import { pintandoMensajesEntrada } from "../service/mensajes.js";
import { diaSemana, hora, ultimoTiempo, fecha } from "../modulos/luxon.js";


export let contactos = undefined

// Aqui se muestra la api
export const traerContacto = async() => {
    const {data} = await axios.get(APPIS.URL_USUARIOS)
    return data
}

//comparando contactos con el input 
export const BuscandoContacto = async (input) => {
    try {
        const { data } = await axios.get(`${APPIS.URL_USUARIOS}?Nombre_like=${input}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

//Pintar tarjeta de contacto buscado 
export const pintarBusquedad = async () => {
    console.log('estoy buscando')
    const dataBuscar = await BuscandoContacto(inputContacto.value)
    contenedorTarjetas.innerHTML = ""
    dataBuscar.forEach(element => {
        contenedorTarjetas.innerHTML += `   
        <div class="tarjeta_contacto" data-id="${element.id}">

            <article class="union_foto_contacto">
                <img class="foto_contacto" src=${element.Foto} alt="contacto1">
            </article>

            <article class="union_mensaje">
                <article class="nombre_dia_mensaje">
                    <span class="nombre_contacto">${element.Nombre}</span>
                    <span class="dia_mensaje">Dia</span>
                </article>

            <article class="icono_texto_mensaje">
                <img class="icono_ckeck" src="../data/Icons/check.svg" alt="check">
                <p class="mensaje_contacto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            </article>

         </div>
        `;
        
    });

 
}


//Pintar nombre, foto y en linea en header de visualizacion mensajes
export const clickTarjetas = ()=>{
    contenedorTarjetas.addEventListener("click", (e) => {
        const seccion = e.target.closest(".tarjeta_contacto");
        // Acceder a las propiedades del elemento
        if (seccion) {        
            const idContacto = seccion.getAttribute("data-id");
            const nombreContacto = seccion.querySelector(".nombre_contacto").textContent;
            const fotoContacto = seccion.querySelector(".foto_contacto").getAttribute("src");
            // Realizar operaciones con las propiedades obtenidas
            console.log("Nombre:", nombreContacto);
            console.log("Foto:", fotoContacto);
            console.log("id:", idContacto);
    
            principalContenedor.innerHTML = "";
            fotoChat.innerHTML = "";
            principalContenedor.innerHTML += `<img src="${fotoContacto}" class="fotico__chat"></img>`
            principalContenedor.innerHTML += `<h1>${nombreContacto}</h1>`
            
            let identificadorContacto = idContacto;
                identificadorContacto = localStorage.setItem("identificador-contacto",(identificadorContacto))
        }
        pintandoMensajesEntrada()
      });

} 





