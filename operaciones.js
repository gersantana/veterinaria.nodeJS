import fs from "fs"

let citasAgendadas = []

// AGREGA CITAS NUEVAS 
export const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const nuevaCita = {
        Nombre: nombre,
        Edad: edad,
        Tipo: tipo,
        Color: color,
        Enfermedad: enfermedad
    }
    
    if (fs.existsSync("citas.json")) {
        const arrayCitasJson = JSON.parse(fs.readFileSync("citas.json", "utf8"))
        citasAgendadas = [...arrayCitasJson, nuevaCita]
        fs.writeFileSync('citas.json', JSON.stringify(citasAgendadas))
        console.log("================================="),
        console.log("***CITA AGENDADA CORRECTAMENTE***"),
        console.log("================================="),
        console.table(nuevaCita)
    }
     else {
        fs.writeFileSync('citas.json', JSON.stringify([...citasAgendadas, nuevaCita]))
    }
};


// LEER EL ARCHIVO  CITAS.JSON
export const leer = () => {

    const citasAgendadas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    if (Array.isArray(citasAgendadas) && !citasAgendadas.length) {
        console.info("***NO TIENES CITAS AGENDADAS***"),
            console.info("Usa el comando ==> node index agregar nombre edad tipo color enfermedad <== para AGG una nueva cita")

    } else {
        console.log("CARGANDO...")
        console.log("====================="),
        console.log("***CITAS AGENDADAS***"),
        console.log("====================="),
            citasAgendadas.forEach((cita, index) => {
                console.log(`Cita #${index + 1}`)
                console.table(cita)
            })
    }
};


