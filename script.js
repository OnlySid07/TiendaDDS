const productos = [
    { id: 1, nombre: 'Coca Cola', precio: 3.3, url: 'https://www.coca-cola.com/content/dam/onexp/sv/es/brands/coca-cola/7840058006509.png' },
    { id: 2, nombre: 'Pepsi', precio: 1.5, url:'https://dojiw2m9tvv09.cloudfront.net/53648/product/sintitulo8148.png'},
    { id: 3, nombre: 'Fanta', precio: 2, url:'https://unomasuno.pe/wp-content/uploads/2021/11/paci-1424.png' },
    { id: 4, nombre: 'Sprite', precio: 2.5, url:'https://wongfood.vtexassets.com/arquivos/ids/694304-800-auto?v=638458833872900000&width=800&height=auto&aspect=true' },
    { id:5, nombre: 'Inca Kola', precio:3.5, url:'https://unomasuno.pe/wp-content/uploads/2021/11/paci-6178.png'}
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
    +'<img src="'+producto.url+'">';
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
        li.style.marginBottom= "10px";
        listaCarrito.appendChild(li);
    });
    totalElemento.innerText = total;
}

function realizarCompra() {
    // Obtener el monto requerido del carrito
    const montoRequeridoElemento = document.getElementById("total-carrito");
    const montoRequerido = document.getElementById(montoRequeridoElemento);
  
    // Obtener el monto del valor puesto 
    const montoPuestoElemento = document.getElementById("monto-puesto");
    const montoPuesto = parseFloat(montoPuestoElemento.value);
  
    // Verificar si los montos son números válidos
    if (isNaN(montoRequerido) || isNaN(montoPuesto)) {
      alert("Por favor, ingresa montos válidos.");
      return;
    }
  
    // Comparar los montos y mostrar el resultado
    if (montoPuesto >= montoRequerido) {
      alert("Compra realizada");
    } else {
      alert("Compra fallida");
    }
  }
  
  const botonComprar = document.getElementById("realizar-compra");
  botonComprar.addEventListener("click", realizarCompra);
