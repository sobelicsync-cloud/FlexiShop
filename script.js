// Funcionalidad de Búsqueda en tiempo real
const buscador = document.getElementById('buscador');
const productos = document.querySelectorAll('.producto');

buscador.addEventListener('input', function(e) {
    const terminoBusqueda = e.target.value.toLowerCase();

    productos.forEach(producto => {
        // Obtenemos las palabras clave del atributo data-categoria y el título
        const categoria = producto.getAttribute('data-categoria').toLowerCase();
        const titulo = producto.querySelector('h3').innerText.toLowerCase();
        
        if (categoria.includes(terminoBusqueda) || titulo.includes(terminoBusqueda)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});

// Lógica de botones de compra
const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', function(e) {
        const tarjeta = e.target.closest('.producto');
        const selector = tarjeta.querySelector('.selector-variante');
        const nombreProducto = tarjeta.querySelector('h3').innerText;

        // Validar si el producto tiene opciones que elegir (sabor, talla, color)
        if (selector && selector.value === "") {
            alert(`Por favor, elige una opción para: ${nombreProducto}`);
        } else {
            const eleccion = selector ? `- Opción: ${selector.options[selector.selectedIndex].text}` : '';
            alert(`¡Añadido al carrito!\n${nombreProducto} ${eleccion}`);
        }
    });
});

