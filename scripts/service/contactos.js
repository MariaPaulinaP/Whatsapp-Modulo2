import { APPIS } from "../modulos/appi.js";
import { inputContacto} from "../modulos/elementsDom.js";
import { contenedorTarjetas, fotoChat, principalContenedor } 
from "../modulos/elementsDom.js";
import { trayendoContactos } from "../service/peticionesHTTP.js";



export let contactos = undefined

// Aqui se muestra la api
export const traerContacto = async() => {
    const {data} = await axios.get(APPIS.URL_USUARIOS)
    return data
}

export const BuscandoContacto = async (input) => {
    try {
        const { data } = await axios.get(`${APPIS.URL_USUARIOS}?Nombre_like=${input}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const pintarBusquedad = async () => {
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

contenedorTarjetas.addEventListener("click", (e) => {
    const seccion = e.target.closest(".tarjeta_contacto");
    // Acceder a las propiedades del elemento
    if (seccion) {
      const nombreContacto = seccion.querySelector(".nombre_contacto").textContent;
      const fotoContacto = seccion.querySelector(".foto_contacto").getAttribute("src");
      // Realizar operaciones con las propiedades obtenidas
      console.log("Nombre:", nombreContacto);
      console.log("Foto:", fotoContacto);
      principalContenedor.innerHTML = "";
      fotoChat.innerHTML = "";
      principalContenedor.innerHTML += `<img src="${fotoContacto}" class="fotico__chat"></img>`
      principalContenedor.innerHTML += `<h1>${nombreContacto}</h1>`
    }
  });




// mujer https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png

// mujer https://us.123rf.com/450wm/gpointstudio/gpointstudio1808/gpointstudio180800126/105868872-vista-de-perfil-del-rostro-de-la-mujer-en-la-foto-de-estudio.jpg

// mujer https://blogs.ucontinental.edu.pe/wp-content/uploads/2021/03/perfiles-de-la-mujer-de-la-segunda-mitad-del-siglo-xxi-universidad-continental-1.jpg

// hombre https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg

// hombre https://aufloria.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-18-at-14.18.38-2.jpeg

// hombre https://p0.pikist.com/photos/201/646/man-profile-portrait-person-face-hood-bart-head-wall.jpg





// `   
//                 <div class="tarjeta_contacto" id="tarjeta${index}">
    
//                     <article class="union_foto_contacto">
//                         <img class="foto_contacto" src=${element.Foto} alt="contacto1">
//                     </article>
    
//                     <article class="union_mensaje">
//                         <article class="nombre_dia_mensaje">
//                             <span class="nombre_contacto">${element.Nombre}</span>
//                             <span class="dia_mensaje">null</span>
//                         </article>
    
//                     <article class="icono_texto_mensaje">
//                         <img class="icono_ckeck" src="../data/Icons/check.svg" alt="check">
//                         <p class="mensaje_contacto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//                     </article>
//                     </article>
        
//                  </div>
//                 `;