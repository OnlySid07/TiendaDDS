const productos = [
    { id: 1, nombre: 'Coca Cola', precio: 3.3 },
    { id: 2, nombre: 'Pepsi', precio: 1.5 },
    { id: 3, nombre: 'Fanta', precio: 2 },
    { id: 4, nombre: 'Sprite', precio: 2.5 },
    { id:5, nombre: 'Inca Kola', precio:3.5}
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
    '<button onclick="agregarCarrito('+ producto.id +')"> Agregar al carrito </button>'
    +'<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Promart_logo_2019.svg">'
    contenedor.appendChild(div);

});
}

function agregarCarrito(id) {
    let producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

//Eliminar del carrito
function eliminarDelCarrito(index){
    carrito.splice(index,1)
    actualizarCarrito();
}


// Es para mostrar mi lista de compras

function actualizarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    const totalElemento = document.getElementById("total");
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((producto, index) => {
        total += producto.precio;
        let li = document.createElement("li");
        li.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        listaCarrito.appendChild(li);
    });
    totalElemento.innerText = total;
}
