//Importacion de variables y funciones
import { btnInicio, pintarRegistro } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad, clickTarjetas } from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil, editarPerfil } from "../scripts/service/editarPerfil.js";
import { nuevoUsuario } from "./service/registro.js";
import { traerMensajes, pintandoMensajesEntrada, valorMensaje} from "./service/mensajes.js";
import { buscadorMensajes, mostrarMensaje, pintarMensaje } from "./service/buscarMensaje.js";
import { ultimoTiempo } from "./modulos/luxon.js";


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
  // nuevoUsuario()
  traerMensajes()
  pintandoMensajesEntrada()
  buscadorMensajes()
  valorMensaje()

  buscadorMensajes();
  mostrarMensaje();
  pintarMensaje()
 
  // ultimoTiempo()
  // console.log(ultimoTiempo())
  
  // traerFotos();
  // cambiarFoto(); 
});


// const ahora = DateTime.now();
// const fecha = ahora.toLocaleString();
// const diaSemana = ahora.weekdayLong;
// const hora = ahora.toLocaleString(DateTime.TIME_SIMPLE);
// // const ultimoTiempo = ahora.toRelative();
// const fechaMensajePasado = ahora.toISO();

// // Mostrar la hora generada
// console.log('Fecha:', fecha);
// console.log('Día de la semana:', diaSemana);
// console.log('Hora:', hora);
// // console.log('Hora actual:', ultimoTiempo);
// console.log('Hora vieja:', fechaMensajePasado);





 // console.log(JSON.parse(localStorage.getItem("identificador")));
  // console.log(JSON.parse(localStorage.getItem("identificador-contacto")));