import { APPIS } from "../modulos/appi.js";
import {
  mensajesSalida,
  contenedorEnviarMensaje,
  inputMensaje,
  contenedorMensajes2,
  contenedorMensajes3
} from "../modulos/elementsDom.js";
import {
  ahora,
  fecha,
  diaSemana,
  hora,
  ultimoTiempo,
} from "../modulos/luxon.js";
import { nuevoUsuario } from "./registro.js";

export const traerMensajes = async () => {
  const { data } = await axios.get(APPIS.URL_MENSAJES);
  const conversacionPruebaaa = data[0].conversacion;
  
  return data;
};



export const pintandoMensajesEntrada = async () => {
  const data = await traerMensajes();
  const idPrincipal = JSON.parse(localStorage.getItem("identificador")); //
  const idDelcontacto = JSON.parse(
    localStorage.getItem("identificador-contacto")
  );
  contenedorMensajes2.innerHTML ="";
  data.forEach((element) => {
    let idUser1 = element.idUser1;
    let idUser2 = element.idUser2;

    if (idUser1 == idPrincipal && idUser2 == idDelcontacto) {
      element.conversacion.forEach((objeto, index) => {
        if (idUser1 == objeto.sendBy) {

          contenedorMensajes2.innerHTML += `
          <article class="mensaje_entrada">
                   <span class="dia_envio_mensaje">${diaSemana}</span>
                   <p>${objeto.message} <span class="span__hora ">${hora}</span></p>

          </article>
                   
                `;
        } else {
          contenedorMensajes2.innerHTML += `
          <article class="mensaje_salida">  
              <span class="dia_envio_mensaje">${diaSemana}</span>
              <p>"${objeto.message}" <span class="span__hora">${hora}</span></p>
          </article>
                  
                `;
        }
      });
    }
  });
};

// Funcion enviar mensaje
export const valorMensaje = () => {
  inputMensaje.addEventListener('keypress', (e) =>{
    if (e.key === 'Enter') {
      let guardarMensaje = inputMensaje.value;
      enviarMensaje(guardarMensaje)
    }
  })

}

const enviarMensaje = async (mensaje) => {
  const idPrincipal = JSON.parse(localStorage.getItem("identificador"));
  const idDelcontacto = JSON.parse(
    localStorage.getItem("identificador-contacto"));

    const data = await traerMensajes();
    
    data.forEach( async (element) => {
    let idUser1 = element.idUser1;
    let idUser2 = element.idUser2;

    if (idUser1 == idPrincipal && idUser2 == idDelcontacto) {
       
      const body = {
      sendBy: `${idPrincipal}`,
      date: "20 junio",
      hour: "3:00",
      message: mensaje,
      flag: "null"
      };

      const prueba = data[0]
      prueba.conversacion.push(body)

      const urlPrueba = 'https://whatsapp-modulo2-miniback.onrender.com/mensajes'

      try {
        const response = await axios.put(urlPrueba, body,{
          // headers: {
          //   "Content-Type": "application/json",
          // },
        });
        
        console.log('Mensaje enviado:', response.data);
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
      }

      
      console.log(prueba)
      

    }
  })


  




 

  
};



// addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     event.preventDefault()
