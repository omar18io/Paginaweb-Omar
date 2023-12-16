document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.organigrama-imagen img');

    imagenes.forEach(function (imagen) {
        // Generamos un color aleatorio al cargar la página
        cambiarColorBorde(imagen);

        // Cambiamos el color del borde al hacer hover en la imagen
        imagen.addEventListener('mouseenter', function () {
            cambiarColorBorde(imagen);
        });
    });

    // Función para cambiar el color del borde
    function cambiarColorBorde(imagen) {
        const colorAleatorio = generarColorAleatorio();
        imagen.style.borderColor = colorAleatorio;
    }

    // Función para generar un color aleatorio en formato hexadecimal
    function generarColorAleatorio() {
        const letras = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
