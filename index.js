import { registrar, leer } from "./operaciones.js";
const [, , operacion, nombre, edad, tipo, color, enfermedad] = process.argv


const validacionesEntrada = () => {

    if (!operacion) {
        console.log(`***ERROR: Debes ingresar una operación***`)
        console.log(`Intenta las operaciones "leer" para revisar citas agendadas o "registrar" para agregar una nueva cita.`)
        console.log(`Comando "ayuda" para mas informacion`)
        return
    }

    if (operacion === "ayuda") {
        console.log(`
        ## COMO USAR
        
        ----------------
        ### Agregar cita
        ----------------
            Para agregar una cita se debe ejecutar el siguiente comando en consola.
        
                *  node index registrar  *
        
            Index es el archivo y "registrar" es la función la cual recibe 5 argumentos.
        
                *  node index registrar nombre edad tipo color enfermedad  *
        
            Los argumentos deben ser ingresados en el mismo orden de los parámetros que pide la función.
        
            EJEMPLO: node index registrar Rocky "8 años" Perro Negro Infección
        
        ------------------------
        ### Leer citas agendadas
        ------------------------
            Se ejecuta el comando.
        
                *  node index leer  *
        `
        )
        return
    }


    if (operacion === 'registrar') {
        registrar(nombre, edad, tipo, color, enfermedad)
        return
    }

    if (operacion === 'leer') {
        leer()

    }
    else {
        console.log(`
    ***ERROR: La operacion "${operacion}" no es valida***
    
    Intenta las operaciones "leer" para revisar citas agendadas o "registrar" para agregar una nueva cita.
        
    Comando "ayuda" para mas informacion
        `)
    }

}

validacionesEntrada()

