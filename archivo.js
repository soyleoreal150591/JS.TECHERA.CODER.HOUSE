
//lista de productos

const listaGolosinas = [
    { codigo: 1001, producto: "MIELCITAS", precio: 300, stock: 50 },
    { codigo: 1002, producto: "CHUPETINES", precio: 350, stock: 30 },
    { codigo: 1003, producto: "MINI ALFAJOR", precio: 570, stock: 25 },
    { codigo: 1004, producto: "PALETAS", precio: 380, stock: 40 },
    
]

// FUNCION PARA CARGAR MAS PRODUCTOS A MI ARRAY. 

function golosinaNueva(codigo, producto, precio, stock) {
    this.codigo = codigo;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
}

listaGolosinas.push( new golosinaNueva(1005, "TURRONES", 280, 25))

listaGolosinas.push( new golosinaNueva(1006, "CHOCOLATE SUIZO", 640, 55))

listaGolosinas.push( new golosinaNueva(1007, "BANANITA DOLCA", 320, 33))

console.table(listaGolosinas)

//funcion para chequear stock en mi array listaGolosinas
 
const existenciaActualizada = listaGolosinas.filter((el)=> el.stock >=1
)




let bienvenidaCliente = prompt("¡Hola! Bienvenido a nuestra tienda. ¿Cómo es tu nombre? (Solo nombre escribí por favor)").toUpperCase();
let nombreCliente = bienvenidaCliente

if (nombreCliente.toUpperCase() == "") {
    console.log("¡Que falta de respeto al no presentarte!");
}

else {
    console.log("Es un gusto " + bienvenidaCliente);

}
//QUIERO PRESENTAR MIS PRODUCTOS A TRAVÉS DE MI ARRAY DE OBJETOS.

for (const mostrarGolosina of listaGolosinas){
    console.log ("Estos son nuestros productos " + mostrarGolosina.producto + " $ " + mostrarGolosina.precio + " c/u. Stock: " + mostrarGolosina.stock + " Unidades") 
}
//QUE MI USUARIO ELIJA EL PRODUCTO Y LA CANTIDAD.

comprarProducto = (codigo, cantidad) => {
    const productoIndex = listaGolosinas.findIndex(item => item.codigo === codigo);
  
    if (productoIndex === -1) {
        alert("El producto no se encuentra en la lista.");
        return;
    }

    const producto = listaGolosinas[productoIndex];

    if (producto.stock < cantidad) {
        alert("No hay suficiente stock disponible.");
        return;
    }

    const precioTotal = cantidad * producto.precio;
    producto.stock -= cantidad;

    alert("Has comprado " + cantidad + " " + producto.producto + " por un total de $" + precioTotal + ".");
};


const codigo = parseInt(prompt("Ingresa el código del producto que deseas comprar:"));

const cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));

comprarProducto(codigo, cantidad);


console.table(existenciaActualizada)


/*const PRECIO_MIELCITAS = 300;

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

function eleccionDecliente (){
    listaProductos =  prompt("Elegí un producto: MIELCITAS ($ 300) - CHUPETINES ($ 350) - MINI ALFAJOR  ($ 570) - PALETAS ($ 380) ").toUpperCase();
    return listaProductos

}

let todosLosproductos = eleccionDecliente ()

while(todosLosproductos  != "MIELCITAS" && todosLosproductos  != "CHUPETINES" && todosLosproductos  != "MINI ALFAJOR" && todosLosproductos  != "PALETAS"){
    alert("elegi una de las opciones");
    todosLosproductos = eleccionDecliente () 
}

let cantidadProducto = Number(prompt("Elegiste " + todosLosproductos + " ¿Cuantos precisas"))

switch(todosLosproductos ) {
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
console.log("EJERCICIO FINALIZADO") */