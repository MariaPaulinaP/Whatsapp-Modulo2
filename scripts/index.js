//Importacion de variables y funciones
import { btnInicio, pintarRegistro } from "../scripts/modulos/direccionamientoPag.js";
import { BuscandoContacto, pintarBusquedad, clickTarjetas } from "./service/contactos.js";
import { inputContacto } from "../scripts/modulos/elementsDom.js";
import { agregandoPerfil, editarPerfil } from "../scripts/service/editarPerfil.js";
import { nuevoUsuario } from "./service/registro.js";
import { traerMensajes, pintandoMensajesEntrada, valorMensaje } from "./service/mensajes.js";
import { buscadorMensajes, mostrarMensaje, pintarMensaje } from "./service/buscarMensaje.js";
import { ultimoTiempo } from "./modulos/luxon.js";
// import { conectado } from "./service/flag.js";


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
  traerMensajes()
  pintandoMensajesEntrada()
  buscadorMensajes()
  valorMensaje()
  buscadorMensajes();
  mostrarMensaje();
  pintarMensaje()
  // conectado()
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





  // mujer 
  //https://enmentepsicologos.com/wp-content/uploads/2020/01/Entender-la-autoestima-500x500.jpg
  // hombre
  // https://www.hobart.es/assets/Images/Contact_person/500x500/Raphael_kirn_1_500x500px.jpg
  // mujer
  // https://www.uoh.cl/wp-content/uploads/2022/04/Paula-Bastias-500x500.jpg
  // hombre
  // https://www.uoh.cl/wp-content/uploads/2022/06/Jorge-Leon-web-500x500.jpg
  // mujer
  // https://medicina.udd.cl/icim/files/2018/12/dra-cecilia-poli-500x500.jpg
  // hombre
  // https://www.hobart.es/assets/Images/Contact_person/500x500/Julian_Rohr_1_500x500px.jpg