import { APPIS } from "../modulos/appi.js";

//Import y crear variable de ceularInput, nombreInput, contraeñaInput, FotoInput


const cargarContactos = async(url) => {
    const {data} = await axios.get(url)
    return data
}

export const nuevoUsuario = async (event) =>{
    event.preventDefault(); 

    try {
        const usuariosActuales = await cargarContactos(APPIS.URL_USUARIOS);

        const nuevoCelular = celularInput.value;

        const compararCelular = usuariosActuales.find((user)=> user.Celular == nuevoCelular);
        if(compararCelular){
            console.log('Usuario ya registrado')
            return
        }
        else{

            const newUsuario = {
                Nombre: nombreInput.value,
                Celular: celularInput.value,
                Contraseña: contraeñaInput.value, 
                Foto: FotoInput.value,
            }

            agregarUsuario(newUsuario); 
        }
        
    } catch (error) {
        console.log(error);
        
    }
}


const agregarUsuario = (newUsuario) =>{

    axios.post(APPIS.URL_USUARIOS, newUsuario,{
        headers: {
            "Content-Type": "application/json",
          },
    })
    .then((response)=> {
        console.log('Usuario agregado', response.data)
    })
    .catch((error) => {
        console.log('Usuario no agregado exitosamente', error)

    })

    

}