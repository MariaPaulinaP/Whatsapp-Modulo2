
import { contenedorTarjetas, fotoPerfil, buscador, perfil, atras, nombrePerfil, BotonEditar, camara, fotoAcambiar, fotoPerfilNueva, fotoIdPrincipal } from "../modulos/elementsDom.js"; 
import { APPIS} from "../modulos/appi.js"




//Mostrar y ocultar ventana de editar perfil 
export const agregandoPerfil = () => {
    fotoPerfil.addEventListener("click", () => {
        console.log("hola");
        buscador.classList.add("oculta")
        buscador.classList.remove("contenedor_buscar")
        contenedorTarjetas.classList.add("ocultas")
        contenedorTarjetas.classList.remove("contenedor_contactos")
        perfil.classList.remove("perfil")
        perfil.classList.add("contenedor_perfil")
    
    });

    atras.addEventListener("click", () => {

        perfil.classList.remove("contenedor_perfil")
        perfil.classList.add("perfil")

        buscador.classList.add("contenedor_buscar")
        buscador.classList.remove("oculta")

        contenedorTarjetas.classList.remove("ocultas")
        contenedorTarjetas.classList.add("contenedor_contactos")
    })
}; 


//Editar nombre de perfil y foto de esa barra de perfil
export const editarPerfil = async() => {
    BotonEditar.addEventListener("click", (e) => {
    nombrePerfil.focus()
    let ValorInput= nombrePerfil.value
    let nombreUsuario = nombrePerfil.placeholder
    nombrePerfil.setAttribute("placeholder", ValorInput)
    console.log(nombreUsuario);
    nombrePerfil.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault(); 
          nombrePerfil.blur();
        }
      });
    })  

    camara.addEventListener("click", () => {
        let fotoNueva = prompt('Ingrese la URL de la foto')
        // if (fotoNueva) {
        //   fotoAcambiar.setAttribute("src", fotoNueva);
        //   fotoPerfilNueva.setAttribute("src", fotoNueva);
         
        // }
        cambiarFoto(fotoNueva); 

    });
}


export const traerFotos = async() => {
  const {data} = await axios.get(APPIS.URL_USUARIOS)
  return data
}

export const cambiarFoto = async(src) =>{
  const idPrincipal = JSON.parse(localStorage.getItem("identificador"));
  
  let indicador = idPrincipal;

  let arrayFotos = await traerFotos()
  arrayFotos.forEach(item  => {
    
    if(item.id == indicador){ 
      let Nombre = item.Nombre;
      let Celular = item.Celular;
      let Contraseña = item.Contraseña;
      let Estado = item.Estado;
      let Información = item.Informción;
      let Fecha_hora = item.Fecha_hora;
      
      
    axios.put(`${APPIS.URL_USUARIOS}/${indicador}`, { Foto: src, Nombre: Nombre, Celular: Celular, Contraseña: Contraseña, Estado: Estado, Informción: Información, Fecha_hora: Fecha_hora })
    .then(response => {
      // item.Foto = src;
      
      console.log('si da')
      location.reload()
    })
    .catch(error=>{
      console.log('error')
    })
    
    }

  });
  

}

// const axios = require('axios');

// const array = [
//   { id: 1, name: 'Objeto 1', foto: 'foto1.jpg' },
//   { id: 2, name: 'Objeto 2', foto: 'foto2.jpg' },
//   { id: 3, name: 'Objeto 3', foto: 'foto3.jpg' }
// ];

// const objetoId = 2;
// const nuevaFoto = 'nueva_foto.jpg';

// // Encuentra el objeto en el array por su ID
// const objeto = array.find(item => item.id === objetoId);

// if (objeto) {
//   // Realiza la solicitud para cambiar la foto
//   axios.put('URL_DEL_ENDPOINT', { id: objetoId, foto: nuevaFoto })
//     .then(response => {
//       // Si la solicitud se realiza correctamente
//       // Actualiza la foto en el objeto del array
//       objeto.foto = nuevaFoto;

//       console.log('Foto cambiada con éxito');
//       console.log(array);
//     })
//     .catch(error => {
//       console.error('Error al cambiar la foto:', error);
//     });
// } else {
//   console.error('Objeto no encontrado en el array');
// }