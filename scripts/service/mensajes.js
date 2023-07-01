
import { APPIS } from "../modulos/appi.js";
import { contenedorMensajes } from "../modulos/elementsDom.js";

export const traerMensajes = async() => {
    const {data} = await axios.get(APPIS.URL_MENSAJES)
    return data
}

export const pintandoMensajesEntrada = async () => {
        const data = await traerMensajes();
        const idPrincipal = JSON.parse(sessionStorage.getItem("identificador")); // Reemplazar con el ID deseado
        const idDelcontacto = JSON.parse(sessionStorage.getItem("identificador-contacto"));
        data.forEach(element => {
          console.log(data)
          console.log("este son los datos de los sendby", element.id);
          
          let idUser1 =  element.idUser1
          let idUser2 = element.idUser2
          console.log(idPrincipal, idDelcontacto, "son el id principal y el de contacto");
          console.log(idUser1, idUser2, "son el iduser1 y el 2");
          
          if (idUser1 == idPrincipal && idUser2 == idDelcontacto){
            element.conversacion.forEach(objeto => {
              if (idUser1 == sendBy){
                
              }
            // if ( idPrincipal == objeto.sendyBy) {
              //mensaje salida 

              // idDelcontacto == objeto.sendBy 
              //mensaje entrada 
              
            // } else { 
              
            // }
              console.log(objeto.message, "estos son los mensajes");
              console.log(objeto, "este es el objeto y entro al condicional");
              contenedorMensajes.innerHTML += `
               <div class="visualizacion_mensajes">
              <span class="dia_envio_mensaje">Jueves</span>
              <article class="mensaje_entrada">
                  <p>${objeto.message}</p>
              </article>
                
              </div> 
              `;
            });
          }
        })
        
          
          

            

       

           
            // if (element.idUser1 === idPrincipal && element.idUser2 === idDelcontacto) {
            //   let mensajes = element.message
            //   console.log(mensajes);
            //   contenedorMensajes.innerHTML = "";
            //   contenedorMensajes.innerHTML += `
            //    <div class="visualizacion_mensajes">
            //   <span class="dia_envio_mensaje">Jueves</span>
            //   <article class="mensaje_entrada">
            //       <p>${element.message}</p>
            //   </article>
                
            //   <span class="dia_envio_mensaje">Viernes</span>
            //   <article class="mensaje_entrada">
            //       <p>${element.message}</p>
            //   </article>
              
            //   </div> 
            //   `;
            // }
        // });
      };


      
    
      // export const pintandoMensajesSalida = async () => {
      //   const data = await traerMensajes();
      //   const idDelcontacto = JSON.parse(sessionStorage.getItem("identificador-contacto")); // Reemplazar con el ID deseado
      //   data.forEach(objeto => {
      //     objeto.conversacion.forEach(element => {
      //       if (element.id == idDelcontacto) {
      //         contenedorMensajes.innerHTML = "";
      //         contenedorMensajes.innerHTML = `
      //       <article class="mensaje_salida">
      //         <p>${element.message}</p>
      //       </article>
    
      //       <article class="mensaje_salida">
      //         <p>${element.message}</p>
      //       </article> 
      //         `;
      //       }
      //     });
      //   });
      // };
    
  
  

// 1 capturar el chat de cada persona, 
//capurar los id: si id de quien inicia sesion es igual a id user1 y id de quien se le dio lick va a ser iual al id user2 (.find)
//si coinciden con los id entra a la conversacion. 
//informacion de quien inicio sesion (en el js) y cuando se le de click a la trajeta guardar el id. 
//



// 


// [
//   {
//     "idUser1": 1,
//     "idUser2": 5,
//     "conversacion": [
//       {
//         "sendBy": "1",
//         "date": "20 junio",
//         "hour": "3:00",
//         "message": "que mas mijo?",
//         "flag": "null"
//       },
//       {
//         "sendBy": "3",
//         "date": "20 junio",
//         "hour": "3:01",
//         "message": "bien vos?",
//         "flag": "null"
//       },
//       {
//         "sendBy": "1",
//         "date": "20 junio",
//         "hour": "3:00",
//         "message": "bien aca camellando?",
//         "flag": "null"
//       },
//       {
//         "sendBy": "3",
//         "date": "20 junio",
//         "hour": "3:01",
//         "message": "ah, me alegra",
//         "flag": "null"
//       }
//     ]
//   }
// ]





