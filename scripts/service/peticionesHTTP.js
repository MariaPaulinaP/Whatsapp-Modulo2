import { APPIS } from "../modulos/appi.js";
import { pintarHome } from "../modulos/direccionamientoPag.js";

//Funcion para verificar usuario y contraseña
export const VerificarIngreso = async(url, formulario) =>{
     
    try{
        const response = await axios.get(`${url}`);
        const data = response.data;
        
        let match = data.find(item => item.Celular === formulario.numero.value && item.Contraseña === formulario.contraseña.value)
                
               if(match){
                console.log(`Bienvenido ${match.Nombre}`);
                Swal.fire(
                    'Correcto',
                    'Bienvenido (a) ' + match.Nombre,
                    'question'
                  )
                  
                  trayendoContactos();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Lo siento, algo ha fallado intenta nuevamente',
                    footer: '<a href="">Regresa al home?</a>'
                })
            }
    }
    catch (error){
        console.log(error);
    }
}
export let nuevosContactos = undefined

//Funcion para cargar las tarjetas de los contactos
export const trayendoContactos = async(data = null) => {
    nuevosContactos = [];
    try {
        const {data} = await axios.get(APPIS.URL_USUARIOS)
        data.forEach(element => {
            const llamarContactos = {
                Foto: element.Foto,
                Nombre: element.Nombre,
            }
            nuevosContactos.push(llamarContactos)
            
    });
    pintarHome(nuevosContactos);
    
    } catch (error) {
         console.log(error);
    }
    
}

