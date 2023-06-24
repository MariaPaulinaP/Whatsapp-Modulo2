import { BotonInicio } from "./elementsDom.js";
import { contenedorInicioSesion } from "./elementsDom.js";
import { contenedorBienvenido } from "./elementsDom.js";
import { contenedorHome } from "./elementsDom.js";
import { VerificarIngreso } from "../service/peticionesHTTP.js";
import { APPIS } from "./appi.js";


export const pintarHome = (arrayCargarContactos) =>{
    // captura.addEventListener("click", (e) => {
        contenedorHome.innerHTML = "";
        contenedorHome.innerHTML += `<header class="header">
 
        <section class="perfil_usuario">
            <figure>
                <img class="foto_perfil" src="https://img.freepik.com/fotos-premium/retrato-hombre-negro-sonrisa-emocionada-estudio-gafas-borde-marco-color-fondo-cara-divertida-modelo-masculino-feliz-nerd-sonriendo-confianza-felicidad-joven-geek-confiado_590464-132269.jpg?w=2000" alt="foto perfil">
            </figure>
        </section>
 
        <section class="perfil_mensaje">
            <figure>
                <img class="foto_perfilContacto" src="https://media.istockphoto.com/id/1166872542/id/foto/potret-studio-seorang-anak-laki-laki-berambut-merah-berusia-7-tahun-dengan-kacamata-dan.jpg?s=170667a&w=0&k=20&c=TemRrh5H1Utx9Sx39uNJTZLeRLilJ9NaqTJsXyTwNp4=" alt="foto contacto">
            </figure>
            <div class="datos_contacto">
                <span class="nombre_perfil">Jose</span>
                <span class="estado_perfil">EN LINEA</span>
            </div>
            <figure>
                <img class="icono_buscar" src="../data/Icons/search.svg" alt="icono buscar">
            </figure>
            
        </section>
 
    </header>
 
    <main>
        <section class="espacio_contactos">
 
            <div class="contenedor_buscar">
                <div class="buscar_contacto">
                    <figure>
                        <img class="icono_buscar_contacto" src="../data/Icons/search.svg" alt="icono buscar">
                    </figure>
                    <input class="input_buscar_contacto" type="text" placeholder="Buscar o iniciar nuevo chat">
                </div>
            </div>
    
            <div id="contenedor_contactos">
    
                <div class="tarjeta_contacto">
 
                    <article class="union_foto_contacto">
                        <img class="foto_contacto" src="https://www.clara.es/medio/2022/02/22/frases-motivadoras-para-transformar-y-mejorar-tu-vida_1bcd141e_900x900.jpg" alt="contacto1">
                    </article>
 
                    <article class="union_mensaje">
                        <article class="nombre_dia_mensaje">
                            <span class="nombre_contacto">Angela</span>
                            <span class="dia_mensaje">Viernes</span>
                        </article>
    
                        <article class="icono_texto_mensaje">
                            <img class="icono_ckeck" src="../data/Icons/check.svg" alt="check">
                            <p class="mensaje_contacto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </article>
                    </article>
                   
                </div>
 
              
            </div>
    
        </section>
 
        <section class="espacio_mensajes">
 
            <div class="visualizacion_mensajes">
                <span class="dia_envio_mensaje">Jueves</span>
                <article class="mensaje_entrada">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus nam velit incidunt</p>
                </article>
                <article class="mensaje_salida">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </article>
                <span class="dia_envio_mensaje">Viernes</span>
                <article class="mensaje_entrada">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus nam velit incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores blanditiis </p>
                </article>
                <article class="mensaje_salida">
                    <p>Lorem ipsum dolor sit amet c</p>
                </article>
            </div>
 
            <div class="escribir_mensajes">
                <img class="icono_enviar_mensajes" src="../data/Icons/smile.svg" alt="iconoCara">
 
                <img class="icono_enviar_mensajes" src="../data/Icons/paperclip.svg" alt="iconoClip">
 
                <input type="text" class="input_mensaje" placeholder="Escribe un mensaje">
 
                <img class="icono_enviar_mensajes" src="../data/Icons/mic.svg" alt="">
            </div>
 
        </section>
 
    </main>
        `
        contenedorInicioSesion.classList.add("hidden__inicioSesion"); 

        const contenedorTarjetas = document.getElementById('contenedor_contactos');
    
        contenedorTarjetas.innerHTML = ``;
        
        arrayCargarContactos.forEach(element =>{
            
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
        `
    });

    //  })
}

const entrando = (btnEntrar) => {
    btnEntrar.addEventListener("click", (e) => {
        e.preventDefault()
        const formulario = document.getElementById("formulario")
        
        VerificarIngreso(APPIS.URL_USUARIOS, formulario)

    })
}

export const btnInicio = () => {
     BotonInicio.addEventListener("click", () => {
        contenedorInicioSesion.innerHTML = "";
        contenedorInicioSesion.innerHTML += `
        <section class="inicio">
        <a href="../html/index.html" class="btn__atras" id="btn__atras">Atrás
        </a>
        <form id="formulario">
            <fieldset class="recuadro">
                
                <legend>Inicia Sesión</legend>
            
                <label for="numero" class="titulo-input">Numero de celular</label>
                <input type="number" name="numero" id="numero__celular" required>
                
                <label for="contraseña" class="titulo-input">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña__celular" required>

                <button id="btn__entrar" class="btn__entrar">Entrar</button>
                

            </fieldset>
        </form>
        <div class="inicial__secundario">
            <img src="/data/imagenwpp.svg" alt="">
            <span class="spn__wpp">Whatsapp</span>

        </div>
    </section>`

    contenedorBienvenido.classList.add("hidden")

    
    const btnEntrar = document.getElementById('btn__entrar');
    
    entrando(btnEntrar)   
   
    });
    
}   



