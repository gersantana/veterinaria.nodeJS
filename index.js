import { registrar, leer } from "./operaciones.js";
const [, , operacion, nombre,edad,tipo,color,enfermedad] = process.argv


// if(!operacion) {
//     console.log("***ERROR: La operacion ingresada no es valida***")
// }

if(operacion === 'registrar') {
    registrar(nombre,edad,tipo,color,enfermedad)
}

if (operacion === 'leer') {
    leer()
}else{
    console.log("***ERROR: La operacion ingresada no es valida***")
}