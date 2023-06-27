//Importacion de variables y funciones
import { btnInicio } from "../scripts/modulos/direccionamientoPag.js";
// import { traerContacto } from "./service/contactos.js";
import { BuscandoContacto, capturando } from "./service/contactos.js";
import { inputContacto, registro } from "../scripts/modulos/elementsDom.js";


btnInicio();
BuscandoContacto(inputContacto);
capturando()

