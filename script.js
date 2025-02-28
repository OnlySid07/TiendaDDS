const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
];

let carrito = [];

document.addEventListener('DOMContentLoaded', mostrarProductos);

//Mostrar los productos en el HTML con el div.innerhtml
function mostrarProductos(){
    const contenedor = document.getElementById("products");
    productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = '<h3>' + producto.nombre + '</h3>' + 
    '<p>' + producto.precio + '</p>'+
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Promart_logo_2019.svg">'
    contenedor.appendChild(div);

});
}

function agregarCarrito (id){

}






// Es para mostrar mi lista de compras

function actualizarCarrito(){
    const listaCarrito = document.getElementById("listaCarrito");
    const totalElmento = document.getElementById("total")

    listaCarrito.innerHTML = '';

    let total = 0; 
}
