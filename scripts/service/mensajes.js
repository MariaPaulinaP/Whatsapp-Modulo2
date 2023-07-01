
import { APPIS } from "../modulos/appi.js";
import { contenedorMensajes } from "../modulos/elementsDom.js";

export const traerMensajes = async() => {
    const {data} = await axios.get(APPIS.URL_MENSAJES)
    return data
}

export const pintandoMensajesEntrada = async () => {
        const data = await traerMensajes();
        const idPrincipal = JSON.parse(sessionStorage.getItem("identificador")); // Reemplazar con el ID deseado
        data.forEach(objeto => {
          objeto.conversacion.forEach(element => {
            if (element.id == idPrincipal) {
                contenedorMensajes.innerHTML = "";
              contenedorMensajes.innerHTML += `
               <div class="visualizacion_mensajes">
              <span class="dia_envio_mensaje">Jueves</span>
              <article class="mensaje_entrada">
                  <p>${element.message}</p>
              </article>
                
              <span class="dia_envio_mensaje">Viernes</span>
              <article class="mensaje_entrada">
                  <p>${element.message}</p>
              </article>
              
              </div> 
              `;
            }
          });
        });
      };

     //id del que inicia sesion y del que le di click para filtrar la convesacion entre esos dos id. Recorrer array de data, si elementidContacto  = id(maria) && elementiduser (alejo) = id(alejo) si se cumple (accedor a la conversacion) y si se traen se pintan y sobra el otro if. 
     //hacer otro condicional si sendBY = maria es una mansaje salida
     //si send by = alejo es mensaje entrada 
     //

  
      
    
      export const pintandoMensajesSalida = async () => {
        const data = await traerMensajes();
        const idDelcontacto = JSON.parse(sessionStorage.getItem("identificador-contacto")); // Reemplazar con el ID deseado
        data.forEach(objeto => {
          objeto.conversacion.forEach(element => {
            if (element.id == idDelcontacto) {
              contenedorMensajes.innerHTML = "";
              contenedorMensajes.innerHTML = `
            <article class="mensaje_salida">
              <p>${element.message}</p>
            </article>
    
            <article class="mensaje_salida">
              <p>${element.message}</p>
            </article> 
              `;
            }
          });
        });
      };
    
  
  

// 1 capturar el chat de cada persona, 
//capurar los id: si id de quien inicia sesion es igual a id user1 y id de quien se le dio lick va a ser iual al id user2 (.find)
//si coinciden con los id entra a la conversacion. 
//informacion de quien inicio sesion (en el js) y cuando se le de click a la trajeta guardar el id. 
//



// 