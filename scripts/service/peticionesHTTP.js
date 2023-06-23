import { APPIS } from "../modulos/appi.js";
import { pintarHome } from "../modulos/direccionamientoPag.js";

export const VerificarIngreso = async(url, formulario,btnEntrar) =>{
    try{
        const response = await axios.get(`${url}`);
        const data = response.data;


        let match = data.find(item => item.Celular === formulario.numero.value && item.Contraseña === formulario.contraseña.value)
            if(match){
                pintarHome(btnEntrar) 
                console.log(`Bienvenido ${match.Nombre}`);
                Swal.fire(
                    'Correcto',
                    'Bienvenido (a) ' + match.Nombre,
                    'question'
                  )
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












// for (const [index, element] of data.entries()) {
//     if (element.Celular === formulario.numero.value) {
//                 alert("BIENVENIDO ", element.Nombre);
//                 pintarHome(btnEntrar); 
//                 break

                
//             } else {    
//                 console.log("INCORRECTO", " " + index);
        
//             }
// }