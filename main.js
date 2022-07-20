//-- Ingreso del usuario--// 
let nombreIngresado = prompt ("ingresa tu nombre");
let ingresarMail = prompt ("Bienvenido a Cartagena "+nombreIngresado+" dejanos tu mail para recibir el newsletter");



//-- Funcion agregar al carrito--//


//--------------------------------------------------Creando Array-----------------------------------------------//
let carrito = [ 
    {id: 1, nombre: "remeras", marca: "nike", precio: 2000},
    {id: 2, nombre: "zapatillas", marca: "adidas", precio: 20000},
    {id: 3, nombre: "buzos", marca: "puma", precio: 5000}

];

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

agregarAlCarrito({id: 1, nombre: "remeras", marca: "nike", precio: 2000});
agregarAlCarrito({id: 2, nombre: "zapatillas", marca: "adidas", precio: 20000});
agregarAlCarrito({id: 3, nombre: "buzos", marca: "puma", precio: 5000});


//cuando el usuario elimine un producto del carrito, se ejecutara esta funcion//

function borrarProductoDelCarrito (idDelProducto) {
    const index = carrito.findIndex ((producto)=> producto.id === idDelProducto);
    if (index != -1) {
        carrito.splice(index, 1);
        console.log (carrito);
    }else {
        return "eliminaste el producto del carrito";
    
    }
    
}

borrarProductoDelCarrito (1);
borrarProductoDelCarrito (2);

//Se aplica metodo de filtrado sobre array creado, para identificar el producto que cumpla con la condicion solicitada//

let filtroPorPrecio = carrito.filter(filtro);
function filtro(carrito){
    if (carrito.precio >= 2000){
        console.log (carrito)
        return true
    } else{
        return false
    }

    }
















