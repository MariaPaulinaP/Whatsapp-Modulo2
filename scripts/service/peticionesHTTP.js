import { APPIS } from "../modulos/appi.js";
import { pintarHome } from "../modulos/direccionamientoPag.js";

export const VerificarIngreso = async(url, formulario,btnEntrar) =>{
    try{
        const response = await axios.get(`${url}`);
        const data = response.data;

        // data.forEach((element, i) => {
        //     if (element.Celular === formulario.numero.value && element.Contraseña === formulario.contraseña.value) {
        //         pintarHome(btnEntrar) 
        //         alert("BIENVENIDO ", element.Nombre) 
        //         return
        //     }
        // });
        let match = data.find(item => item.Celular === formulario.numero.value && item.Contraseña === formulario.contraseña.value)
            if(match){
                console.log(`Bienvenido ${match.Nombre}`);
                pintarHome(btnEntrar) 
            }
            else{
                console.log('fallo');
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