class Servicio {
    constructor(tipo, modalidad, precio, ) {
        this.tipo = tipo;
        this.modalidad = modalidad;
        this.precio = parseFloat(precio);
    }
    precioPyme() {
        this.precio = this.precio * 1.25;
        console.log("El precio es: " + this.precio);
    }

    precioEmpresa() {
        this.precio = this.precio * 1.5;
        console.log("El precio es: " + this.precio);
    }
    modDigital() {
        if (this.modalidad.toLowerCase() == "digital") {
            this.precio * 1.5;
            console.log("El precio es: " + this.precio);
        }
    }
    modPresencial() {
        if (this.modalidad.toLowerCase() == "presencial") {
            this.precio * 2;
            console.log("El precio es: " + this.precio);
        }
    }
}


const asesoramiento1 = new Servicio("asesoramiento", "", 150000);

asesoramiento1.precioPyme();
asesoramiento1.precioEmpresa();
asesoramiento1.modPresencial();
asesoramiento1.modalidad = prompt("Ingrese la modalidad del servicio digital/presencial: ")