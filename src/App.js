import { carritoIndex } from "./components/carrito/carritoIndex.js";
import productosController from "./controllers/productosController.js";

export const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  const productos = await productosController()

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-img-top center">
                        <img src=${producto.img} width="200px">
                        <span class="card-title">${producto.nombre}</span>
                          <p>${producto.desc}</p>
                          <p>Color: ${producto.color}</p>
                          <p>$ ${parseInt(producto.precio)}</p>
                          <a class="btn" id=boton${producto.id}>Comprar</a>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);

      swal({
        title: 'Genial!',
        text: 'Tu producto fue añadido al carrito!',
        icon: 'success',
        confirm: 'Ok',
        timer: 1500
    })
    });
  });
};

const boton = document.getElementById(`botonFinalizar`);
    boton.addEventListener("click", () => {
      swal({
        title: 'Muchas gracias',
        text: 'Tu Compra ha Finalizado con Exito!',
        icon: 'success',
        confirm: 'Cerrar',
    })
    });

        
