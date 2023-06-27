import { APPIS } from "../modulos/appi.js";
import { inputContacto } from "../modulos/elementsDom.js";
import { botonInputContacto } from "../modulos/elementsDom.js";
import { contenedorTarjetas } from "../modulos/elementsDom.js";




export const traerContacto = async() => {
    const {data} = await axios.get(APPIS.URL_USUARIOS)
    return data
}

export const BuscandoContacto = async (input) => {
    
    const contactos = await traerContacto()

    botonInputContacto.addEventListener('click', ()=>{
        let valor = input.value;
        contactos.filter(element => {
            
            if ( element.Nombre.includes(valor)) {
                let encontrado = 
                contenedorTarjetas.innerHTML += `   
                <div class="tarjeta_contacto">
    
                    <article class="union_foto_contacto">
                        <img class="foto_contacto" src=${element.Foto} alt="contacto1">
                    </article>
    
                    <article class="union_mensaje">
                    <article class="nombre_dia_mensaje">
                        <span class="nombre_contacto">${element.Nombre}</span>
                        <span class="dia_mensaje">Viernes</span>
                    </article>
    
                    <article class="icono_texto_mensaje">
                        <img class="icono_ckeck" src="../data/Icons/check.svg" alt="check">
                        <p class="mensaje_contacto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    </article>
        
                 </div>
                `;
                // convierte en un nodo todo lo que hay en la variable encontrado
                const rango = document.createRange();
                const fragmento = rango.createContextualFragment(encontrado);
                const nodo = fragmento.firstChild;
                contenedorTarjetas.append(nodo);
    
            }else{
                Swal.fire(
                    'Contacto no existente',
                    'Intente de nuevo'
                    
                )
                
            }
            
            
        });

    })    
}

export const capturando = () => {
    contenedorTarjetas.addEventListener("click", (e) => {
        const elemento = e.target.closest(".tarjeta_contacto")
        
        console.log(elemento);
    })
}





// mujer https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png

// mujer https://us.123rf.com/450wm/gpointstudio/gpointstudio1808/gpointstudio180800126/105868872-vista-de-perfil-del-rostro-de-la-mujer-en-la-foto-de-estudio.jpg

// mujer https://blogs.ucontinental.edu.pe/wp-content/uploads/2021/03/perfiles-de-la-mujer-de-la-segunda-mitad-del-siglo-xxi-universidad-continental-1.jpg

// hombre https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg

// hombre https://aufloria.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-18-at-14.18.38-2.jpeg

// hombre https://p0.pikist.com/photos/201/646/man-profile-portrait-person-face-hood-bart-head-wall.jpg