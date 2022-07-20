//-- Ingreso del usuario--//
let nombreIngresado = prompt ("ingresa tu nombre");
let ingresarMail = prompt ("Bienvenido a Cartagena "+nombreIngresado+" dejanos tu mail para recibir el newsletter");



//-- Funcion agregar al carrito--//


//--------------------------------------------------Creando Array-----------------------------------------------//
let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto)
    console.log (carrito);
}

// // function tenemosStock (stock)  {
// if (stock < 0) {
//     return "tenemos stock";
// } else  {
//     return "no tenemos stock";
// }

//   


//  Cuando el usuario agregue el producto al carrito, esta llamando a cada uno de los productos//

agregarAlCarrito({id: 1, nombre: "remeras nike", precio: 2000});
agregarAlCarrito({id: 2, nombre: "zapatillas adidas", price: 20000});
agregarAlCarrito({id: 3, nombre: "buzos puma", precio: 5000});


//cuando el usuario elimine un producto del carrito, se ejecutara esta funcion//

function borrarProductoDelCarrito (idDelProducto) {
    const index = carrito.findIndex ((producto)=> producto.id === idDelProducto);
    carrito.splice(index, 1);
    console.log (carrito);
}

borrarProductoDelCarrito (1);
borrarProductoDelCarrito (2);



















