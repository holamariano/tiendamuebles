import { actualizarCarrito } from "./actualizarCarrito.js";
import { productos } from "../../data/stock.js";

export const carritoIndex = (productoId) => {
    let carritoDeCompras = [];

    if (localStorage.getItem("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    }

    let productoRepetido = carritoDeCompras.find( producto => producto.id === productoId);
    contarProductosRepetidos(productoRepetido, productoId, carritoDeCompras);
}

const contarProductosRepetidos = (productoRepetido, productoId, carritoDeCompras) => {
    if (productoRepetido) {
        productoRepetido.cantidad++
        document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id=cantidad${productoRepetido.id}>Cantidad: ${productoRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras);
    } else {
        agregarProductoAlCarrito(productoId, carritoDeCompras);
    }
}

const agregarProductoAlCarrito = (productoId, carritoDeCompras) => {
    const contenedor = document.getElementById("carrito-contenedor");
    const producto = productos.find( producto => producto.id === productoId );
    carritoDeCompras.push(producto);

    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="btn boton-eliminar" value="${producto.id}">x</button>
                    `
    contenedor.appendChild(div);
    actualizarCarrito(carritoDeCompras);
}

// function restarUnidad(productoId) {
//     const producto = productos.find( producto => producto.id == productoId );
//     producto.cantidad--;
//     }

export const eliminarProductoCarrito = (productoId) => {

    // const producto = productos.find( producto => producto.id === productoId );

    //     if (producto.cantidad >1) {
    //         producto.cantidad--;
    //     }
    //     else {
            const carritoStorage = obtenerCarritoStorage();
            const carritoActualizado = carritoStorage.filter( producto => producto.id != productoId);

    actualizarCarrito(carritoActualizado);
    actualizarProductosCarrito(carritoActualizado);
        }
// }

export const actualizarProductosCarrito = (carritoDeCompras) => {
    const contenedor = document.getElementById("carrito-contenedor");

    contenedor.innerHTML = "";

    carritoDeCompras.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: $ ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="btn boton-eliminar" value="${producto.id}">x</button>
                    `
        contenedor.appendChild(div);
    });
}

export const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));

    return carritoStorage;
}
