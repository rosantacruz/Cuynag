
function multiplicar(numero1,numero2) {
    return numero1 * numero2;
}
function dividir(numero1,numero2) {
    return numero1 / numero2
}

var eleccion = prompt("Introduzca el servicio buscado: asesoramiento/consultoria");
var empresa = prompt("Introduzca el tamaño de su empresa: pyme/gran");

if ((eleccion == "asesoramiento") && (empresa == "pyme")) {
    var resultado = multiplicar(150000,1.25);
    alert("El costo del servicio es: " + resultado + " pesos");
}
if ((eleccion == "asesoramiento") && (empresa == "gran")) {
    var resultado = multiplicar(150000,1.5);
    alert("El costo del servicio es: " + resultado + " pesos");
}

if ((eleccion == "consultoria") && (empresa == "pyme")) {
    var resultado = dividir(150000,2);
    alert("El costo del servicio es: " + resultado + " pesos");
}
if ((eleccion == "consultoria") && (empresa == "gran")) {
    var resultado = dividir(150000,2);
    alert("El costo del servicio es: " + resultado + " pesos");
}

