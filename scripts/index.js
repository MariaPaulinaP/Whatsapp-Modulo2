//Importacion de variables y funciones
import { btnInicio, pintarRegistro } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad} from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil, editarPerfil } from "../scripts/service/editarPerfil.js";

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
btnInicio();
BuscandoContacto(inputContacto);
inputContacto.addEventListener('keyup', debounce(pintarBusquedad, 500))
agregandoPerfil()
editarPerfil()
pintarRegistro();