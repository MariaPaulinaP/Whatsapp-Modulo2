import { APPIS } from "../modulos/appi.js";

export const VerificarIngreso = async(url) =>{
    try{
        const{data} = await axios.get(`${url}`);
        const response = data;
        console.log(response)
    }
    catch (error){
        console.log(error);
    }

}
VerificarIngreso(APPIS.URL_USUARIOS);





