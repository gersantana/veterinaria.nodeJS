import { registrar, leer } from "./operaciones.js";
const [, , operacion, nombre,edad,tipo,color,enfermedad] = process.argv

if(operacion === 'registrar') {
    registrar(nombre,edad,tipo,color,enfermedad)
}

if (operacion === 'leer') {
    leer()
}