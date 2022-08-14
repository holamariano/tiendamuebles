import { actualizarCarrito } from "./components/carrito/actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { actualizarProductosCarrito, obtenerCarritoStorage } from "./components/carrito/carritoIndex.js";
// import { productos } from "./data/stock.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        const carritoStorage = obtenerCarritoStorage();
        actualizarProductosCarrito(carritoStorage);
        actualizarCarrito(carritoStorage);
    }
})