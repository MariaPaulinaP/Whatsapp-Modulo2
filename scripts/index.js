//Importacion de variables y funciones
import { btnInicio } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad} from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil } from "../scripts/service/editarPerfil.js";

const debounce = (func, delay) => {
    let timeoutId;
  
    return function() {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }

btnInicio();
BuscandoContacto(inputContacto);
inputContacto.addEventListener('keyup', debounce(pintarBusquedad, 500))

agregandoPerfil()