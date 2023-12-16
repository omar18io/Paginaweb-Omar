const menu = document.querySelector('.hamburguesa'); /*seleccionamos nuestra menu amburguesa : query selector es la clase : loe agregamos un evento */
const navegacion = document.querySelector('.navegacion'); /*seleccionamos nuestra navegacion : va aser con el querySelector que es por la clase : navegacion */
const imagenes = document.querySelectorAll('img'); /*nos devuelve una coleccion de dtos tenemos q iterar para poder mostrarlos */
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres'); 
const contenedorPlatillos = document.querySelector('.platillos');
// const parrafoChatBotRes = document.querySelectorAll('.parrafo-chat-bot-res');
document.addEventListener('DOMContentLoaded',()=>{ /*DOMContentLoaded :  se dispara cuando el DOM del documento ha sido completamente cargado y analizado*/
    eventos();
    platillos();
}); /*es un escuchador de eventos */
const eventos = () =>{
    menu.addEventListener('click',abrirMenu); /*agregamos el evento del menu : va aser de tipo click , cuando haga click se va a ejecutar la funcion de abrir menu*/
}
const abrirMenu = () =>{
     navegacion.classList.remove('ocultar'); /*a la navegacion . classlist .remove (le vamos a quitar la clase ocultar : con esto si yo le doy click al menu me daran los enlaces )*/
     botonCerrar(); /*aqa llamamos a la funcion cerrar osea cuando esta funcion se ejecute : va a llamar a la funcion de botonCerrar */
}
const botonCerrar = () =>{
    const btnCerrar = document.createElement('p'); /*creamos un btnCerrra y va aser igual a document creat elementy va aser un parrafo */
    const overlay  = document.createElement('div');/* basicamente el overleyes algo q cubre como la pantalla va aser igual a document createlement va ase  un div y el overlay va tener una clase  */
    overlay.classList.add('pantalla-completa'); /*le ponemos la clase pantalla-completa esa clase la crearemos en css  */
    const body = document.querySelector('body'); /*seleccionamos nuestro body  seleccionamos nuetsra clase de bodu¿y */
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; /*una condicion : de q si document . document querySelectorAll : osea q si seleccionamos todos los overlay q el usuario haya generado : */
    /*seleccionamos por clase q seria pantalla completa.length osea q si la longitud de pantalla completa es mayor a 0 quiero q temines la ejecucion del programa y ya no se ejecute lo de abajo  */
    body.appendChild(overlay);
    btnCerrar.textContent = 'x'; /*lo que ase este metodo es agregarle texto al elemento q puse a mi parrafo y le ponemos una x Minuscula */
    btnCerrar.classList.add('btn-cerrar'); /*agregamos nuestro clase de nuestyro estilo de btn-cerrar*/
    navegacion.appendChild(btnCerrar);   /*para ingresarle un nuevo hijo y le pasamos el boton cerrar y asi ya se mostraia el x pero al lado de abajp  */
    cerrarMenu(btnCerrar,overlay); /*la mandamos a llamra a la funcio de cerrra menu */
    /*ha cerrar menu le vamos a pasar el overLay como parametro y nuetsra funcion va a recibir un overlay : cuando yo haga click quiero q el overlay se quite */
}
/*si no hahttps://www.gravatar.com/avatar/7a5abdb4402c6ce5ba9a1ee4cbf8141c?s=64&d=robohashces un leis load tus imagens la va ir descargando el servidor de una manera asincrona osea al  mismo tiempo :  */
const observer = new IntersectionObserver((entries, observer)=>{ /*va a resivir 2 parametros : el entries va aser la informacion de lo q se tiene q observar y el observer es el observador osea lo q va ir viendo cuando hayga interseccion */
        entries.forEach(entry=>{ /*la informacion la vmaos a ir recorriendo con un for-each recibe un entry la informacion */
            if(entry.isIntersecting){ /*q si hay una interseccion entonces */
                const imagen = entry.target; /*a esa informacion guardada .target */
                imagen.src = imagen.dataset.src; /*cuando hayga una interseccion lo q hayga en el data lo pasara a source y ya se iran mostrando las imagenes mediante q asemos stroll*/
                observer.unobserve(imagen); /*osea q lo deje de visualizar al elemento q tenemos q observar en este caso la imagen ya q la vamos ir observando en el for each */
            }
        }); 
});
/*mientras vayamos asiendo scroll las imagenes se van a ir mostrando */
imagenes.forEach(imagen=>{ /*iterar el parametro q tenemos q es imagen va ir iteranta por tantas imagenes q tengamos */
    observer.observe(imagen); /**/
});
const cerrarMenu = (boton, overlay) =>{ /*va a resivir de parametro un boton  */
    boton.addEventListener('click',()=>{ /*le agregamos el evento en funcion flecha */
        navegacion.classList.add('ocultar'); /*a la naavegacion le vamos poner un claslist agregar la clase ocultar y se va cerrar nuestro menu*/
        overlay.remove(); /*con esto saco la clase y se limpia vuelve a la normalidad sin transparencia ni nadad */
        boton.remove();
    });
    overlay.onclick = function(){  
        overlay.remove(); /*con esta linea de codigo hara q el overlay se limpie */
        navegacion.classList.add('ocultar');  /*aghregamos la clase ocultar y cuando clikamos en el overlay y se limpia los enlaces el menu de navegacion */
        boton.remove();
    }
}
/*arrow function */
const platillos = () =>{
    let platillosArreglo = []; /*un arreglo vacido para luego ir metiemdolos */
    const platillos = document.querySelectorAll('.platillo'); /*platillos va aaser igual a seleccionaremos por clase : tiene la clase de platillo la seleccionamos*/
    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]); /*este va arrecorrer por cada platillo y ponemos platillosArreglo osea mi arreglo va aser igual a una copia del dicho arreglo : osea mi mismo arreglo lo voy a copiar porque yo voy air metiendo cada elemento : osea cada platillo */
/*basicamente lo q estamos asiendo es q buestro arreglo lo estamos copiando y asiendo una referencua por que si yo crease un nuevo arreglo y le voy pasando cada platillo pues se va ir metiendo 1 a 1 */
/*cuando aqui se valla recorriendo se va ir metiendo un platillo */
    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada'); /*.filter lo q ase es generar un nuevo arreglo con lo q estamos buscando  */
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');
    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
}
const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) =>{ /*arrow function*/
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    });
    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta)); /*q ns vala insertrando las ensaladas  */
    });
    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}
const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
const mostrarNombreUsuario = () => {
    const nombreUsuario = localStorage.getItem('usuario');
    if (nombreUsuario) {
        const mensaje = document.createElement('p');
        mensaje.textContent = `$ Bienvenido a nuestra web ${nombreUsuario}. Espero que sea de tu agrado, sino déjanos un mensaje.`;
        mensaje.classList.add('mensajeBienvenida'); // Agregar una clase al párrafo creado
        document.querySelector('.mostrarNombreUsuario').appendChild(mensaje);
    } else {
        const nombre = prompt('Ingrese su nombre');
        if (nombre) {
            localStorage.setItem('usuario', nombre);
            const mensaje = document.createElement('p');
            mensaje.textContent = `$ Bienvenido a nuestra web ${nombre}. Espero que sea de tu agrado, sino déjanos un mensaje.`;
            mensaje.classList.add('mensajeBienvenida'); // Agregar una clase al párrafo creado
            document.querySelector('.mostrarNombreUsuario').appendChild(mensaje);
        }
    }
};
window.addEventListener('load', mostrarNombreUsuario);


document.addEventListener("DOMContentLoaded", function() {
    const textoIdeario = document.getElementById("texto-ideario");
    const imagenIdeario = document.getElementById("imagen-ideario");
    const botonVerMas = document.getElementById("ver-mas");
    botonVerMas.addEventListener("click", function() {
        botonVerMas.classList.add("loading");
        if (textoIdeario.style.display === "none" || textoIdeario.style.display === "") {
            setTimeout(() => {
                textoIdeario.style.display = "block";
                textoIdeario.style.opacity = "1";
                imagenIdeario.style.display = "block"; // Mostrar la imagen al mostrar el texto
                botonVerMas.textContent = "Ver menos";
                botonVerMas.classList.remove("loading");
            }, 1500);
        } else {
            textoIdeario.style.opacity = "0";
            setTimeout(() => {
                textoIdeario.style.display = "none";
                imagenIdeario.style.display = "none"; // Ocultar la imagen al ocultar el texto
                botonVerMas.textContent = "Ver más";
                botonVerMas.classList.remove("loading");
            }, 500);
        }
    });
});

// bot antes de que pregunte los que ya tiene registradi en el bot mas despues puede ser con una clave openai 

// Agregar animación de clic a los elementos con la clase 'parrafo-chat-bot-res'
const parrafos = document.querySelectorAll('.parrafo-chat-bot-res');
parrafos.forEach(parrafo => {
    parrafo.addEventListener('click', () => {
        // Seleccionar el texto del párrafo
        const textoParaCopiar = parrafo.textContent;
        // Crear un elemento de texto temporal
        const elementoTemporal = document.createElement('textarea');
        elementoTemporal.value = textoParaCopiar;
        // Añadir el elemento temporal al DOM
        document.body.appendChild(elementoTemporal);
        // Seleccionar y copiar el texto del elemento temporal
        elementoTemporal.select();
        document.execCommand('copy');
        // Eliminar el elemento temporal del DOM
        document.body.removeChild(elementoTemporal);
        // Cambiar el color del párrafo para indicar que se ha copiado
        parrafo.style.backgroundColor = '#3498db';
        setTimeout(() => {
            parrafo.style.backgroundColor = '#4caf50';
        }, 500);
        // Mostrar mensaje indicando que el texto se ha copiado
        const mensajeCopia = document.createElement('div');
        mensajeCopia.textContent = 'Texto copiado. Pégalo en nuestro chat bot.';
        mensajeCopia.className = 'mensaje-copia';

        // Añadir el mensaje al DOM
        parrafo.appendChild(mensajeCopia);

        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => {
            mensajeCopia.style.opacity = '0';
            setTimeout(() => {
                parrafo.removeChild(mensajeCopia);
            }, 900);
        }, 2000);
    });
});







