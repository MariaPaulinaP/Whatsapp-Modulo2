//Importacion de variables y funciones
import { btnInicio, pintarRegistro } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad, clickTarjetas } from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil, editarPerfil } from "../scripts/service/editarPerfil.js";
import { nuevoUsuario } from "./service/registro.js";
import { traerMensajes, pintandoMensajesEntrada, valorMensaje} from "./service/mensajes.js";
import { buscadorMensajes, mostrarMensaje, pintarMensaje } from "./service/buscarMensaje.js";


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
  clickTarjetas(); 
  BuscandoContacto(inputContacto);
  inputContacto.addEventListener('keyup', debounce(pintarBusquedad, 500))
  agregandoPerfil()
  editarPerfil()
  pintarRegistro();
  nuevoUsuario()
  traerMensajes()
  pintandoMensajesEntrada()
  buscadorMensajes()
  valorMensaje()

  buscadorMensajes();
  mostrarMensaje();
  pintarMensaje()
});






 // console.log(JSON.parse(localStorage.getItem("identificador")));
  // console.log(JSON.parse(localStorage.getItem("identificador-contacto")));