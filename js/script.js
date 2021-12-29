
let temperatura = parseInt(prompt("Ingresa la temperatura actual: "));

let clima = prompt("Ingrese el clima actual - lluvia/soleado: ");


if ((temperatura <= 5) && (clima == "lluvia")) {
    alert ("Se recomienda utilizar una chaqueta de abrigo e impermeable")
}   else if ((temperatura <= 5) && (clima == "soleado")) {
    alert ("Se recomienda utilizaar una chaqueta de abrigo")
}   else if (((temperatura >= 6) && (temperatura <= 15)) && (clima == "lluvia")) {
    alert("Se recomienda utilizar una chaqueta ligera e impermeable")
}   else if (((temperatura >= 6) && (temperatura <= 15)) && (clima == "soleado")) {
    alert("Se recomienda utulizar una chaqueta ligera")
}   else if ((temperatura >= 16) && (clima == "lluvia")) {
    alert("Se recomienda utilizar un paragua")
}   else if (( temperatura = " ") || (clima=" ")) {
    alert("Valores incorrectos")
}   else {
    alert("No se recomienda usar nada")
}
