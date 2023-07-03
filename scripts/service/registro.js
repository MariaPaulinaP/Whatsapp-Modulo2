import { APPIS } from "../modulos/appi.js";
import { contenedorRegistro } from "../modulos/elementsDom.js";


const cargarContactos = async(url) => {
    const {data} = await axios.get(url)
    return data
}

export const nuevoUsuario = async () =>{
    
    try {
        contenedorRegistro.addEventListener("click", async (e) => {
            e.preventDefault()
            const inputNombre = document.getElementById("name").value;
            const inputCelular = document.getElementById("phone").value;
            const inputContraseña = document.getElementById("password").value;
            const inputUrl = document.getElementById("foto__registro").value;

        
        const usuariosActuales = await cargarContactos(APPIS.URL_USUARIOS);
        
       
        const nuevoCelular = inputCelular;

        const compararCelular = usuariosActuales.find((user)=> user.Celular === nuevoCelular);
        if(compararCelular){
            console.log('Usuario ya registrado')
            return
        }
        else{

            const newUsuario = {
                Nombre: inputNombre, 
                Celular:  inputCelular, 
                Contraseña: inputContraseña,
                Foto:inputUrl,
            }

            agregarUsuario(newUsuario); 
        }
        });
        
        
        
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