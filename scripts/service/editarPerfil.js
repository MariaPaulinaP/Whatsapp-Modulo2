
import { contenedorTarjetas, fotoPerfil, buscador, perfil, atras, nombrePerfil, BotonEditar, camara, fotoAcambiar, fotoPerfilNueva } from "../modulos/elementsDom.js"; 

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
        if (fotoNueva) {
          fotoAcambiar.setAttribute("src", fotoNueva);
          fotoPerfilNueva.setAttribute("src", fotoNueva);
        }

    });
}
