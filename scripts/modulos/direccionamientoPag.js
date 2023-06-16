import { BotonInicio } from "./elementsDom.js";

export const btnInicio = () => {
    BotonInicio.addEventListener("click", () => {
        console.log("funciono");
        window.location.href="../html/iniciarSesion.html";
    });
}   
