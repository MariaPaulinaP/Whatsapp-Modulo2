//Importacion de variables y funciones
import { btnInicio, pintarRegistro } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad } from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil, editarPerfil } from "../scripts/service/editarPerfil.js";
import { nuevoUsuario } from "./service/registro.js";
import { traerMensajes, pintandoMensajesEntrada, pintandoMensajesSalida } from "./service/mensajes.js";


// delay para la funcion del buscador
const debounce = (func, delay) => {
    let timeoutId;
  
    return function() {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }

//Llamar funciones
document.addEventListener("DOMContentLoaded", () => {
  btnInicio();
  BuscandoContacto(inputContacto);
  inputContacto.addEventListener('keyup', debounce(pintarBusquedad, 500))
  agregandoPerfil()
  editarPerfil()
  pintarRegistro();
  nuevoUsuario()
  traerMensajes()
  console.log(JSON.parse(sessionStorage.getItem("identificador")));
  console.log(JSON.parse(sessionStorage.getItem("identificador-contacto")));
  pintandoMensajesEntrada()
  pintandoMensajesSalida()
});

