import { APPIS } from "../modulos/appi.js";

const BaseUsuarios = async() => {
    const { data } = await axios.get(APPIS.URL_USUARIOS)
    datos
}