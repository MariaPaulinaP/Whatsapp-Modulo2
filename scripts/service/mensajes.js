
import { APPIS } from "../modulos/appi.js";



const contenedorMensjas = document.querySelector('.visualizacion_mensajes')


export const traerMensajes = async() => {
    const {data} = await axios.get(APPIS.URL_MENSAJES)
    console.log(data)
    return data
}



// 1 capturar el chat de cada persona, 
//capurar los id: si id de quien inicia sesion es igual a id user1 y id de quien se le dio lick va a ser iual al id user2 (.find)
//si coinciden con los id entra a la conversacion. 
//informacion de quien inicio sesion (en el js) y cuando se le de click a la trajeta guardar el id. 
//



