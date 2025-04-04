console.clear()
let usuario = {
    nombre: "mauricio",
    apellido: "lopez",
    edad: "21",
    Cedula_Identidad: "12345678",
    calificacion: getrandomint(12)
}

let calificacion = getrandomint(12)

function getrandomint(max) {
    return Math.floor(Math.random() * max);
}

console.log(usuario)


if (calificacion >= 7) {
    console.log("aprovado")
}
else { console.log("reprobado") }

if (true) {
    var nombre = "mauricio"
}
console.log(calificacion)

