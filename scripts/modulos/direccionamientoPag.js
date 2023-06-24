import { BotonInicio } from "./elementsDom.js";
import { contenedorInicioSesion } from "./elementsDom.js";
import { contenedorBienvenido } from "./elementsDom.js";
import { contenedorHome } from "./elementsDom.js";
import { VerificarIngreso } from "../service/peticionesHTTP.js";
import { APPIS } from "./appi.js";


export const pintarHome = (arrayCargarContactos) =>{

       contenedorHome.classList.add('contenedor__verHome')

       contenedorInicioSesion.classList.add("hidden__inicioSesion");

    //Pintar tarjetas
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



