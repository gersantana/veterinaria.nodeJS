import fs from "fs"

let citasAgendadas = []


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

    } else {
        fs.writeFileSync('citas.json', JSON.stringify([...citasAgendadas, nuevaCita]))
    }

    return (
        console.log("================================="),
        console.log("***CITA AGENDADA CORRECTAMENTE***"),
        console.log("================================="),
        console.log(nuevaCita)
    )
};

// LEER EL ARCHIVO  CITAS.JSON
export const leer = () => {

    const citasAgendadas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    if (Array.isArray(citasAgendadas) && !citasAgendadas.length) {
        console.log("***NO TIENES CITAS AGENDADAS***"),
            console.log("Usa el comando ==> node index agregar nombre edad tipo color enfermedad <== para AGG una nueva cita")

    } else {
        console.log("CARGANDO...")
        console.log("====================="),
            console.log("***CITAS AGENDADAS***"),
            console.log("====================="),
            citasAgendadas.forEach((cita, index) => {
                console.log(`Cita #${index + 1}`)
                console.log(cita)
            })
    }
};


