
const PRECIO_MIELCITAS = 300;

const PRECIO_CHUPETINES = 350;

const PRECIO_MINI_ALFAJOR = 570;

const PRECIO_PALETAS = 380;

let bienvenidaCliente = prompt("¡Hola! Bienvenido a nuestra tienda. ¿Cómo es tu nombre? (Solo nombre escribí por favor)").toUpperCase();
let nombreCliente = bienvenidaCliente

if (nombreCliente.toUpperCase() == "") {
    console.log("¡Que falta de respeto al no presentarte!");
}

else {
    console.log("Es un gusto " + bienvenidaCliente);

}

function eleccionDecliente (listaProductos){
   return listaProductos =  prompt("Elegí un producto: MIELCITAS ($ 300) - CHUPETINES ($ 350) - MINI ALFAJOR  ($ 570) - PALETAS ($ 380) ").toUpperCase();

}

eleccionDecliente ()

while(eleccionDecliente () != "MIELCITAS" && eleccionDecliente () != "CHUPETINES" && eleccionDecliente () != "MINI ALFAJOR" && eleccionDecliente () != "PALETAS"){
    console.log("elegi una de las opciones");
    eleccionDecliente () 
}

let cantidadProducto = Number(prompt("Elegiste " + eleccionDecliente () + " ¿Cuantos precisas"))

switch(eleccionDecliente ()) {
    case "MIELCITAS": console.log("El precio a pagar es $" + cantidadProducto * PRECIO_MIELCITAS );
    break;
    case "CHUPETINES": console.log("El precio a pagar es $" + cantidadProducto * PRECIO_CHUPETINES);
    break;
    case "MINI ALFAJOR": console.log("El precio a pagar es $" + cantidadProducto * PRECIO_MINI_ALFAJOR)
    break;
    case "PALETAS":  console.log("El precio a pagar es $" + cantidadProducto * PRECIO_PALETAS)
    break;
    //aqui no hace falta un default porque el valor nunca será distinto al que se necesita debido a que fue contemplado en la estructura del while
}
console.log("--------------------------------------------")
console.log("EJERCICIO FINALIZADO")