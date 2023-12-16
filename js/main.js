// /*carrusel */
document.addEventListener('DOMContentLoaded', () => { /*accederr documento agregar un listener y ese listener va hacer para  DOMContentLoaded */
    const elementosCarrusel = document.querySelectorAll('.carousel'); /*queremos accxeder a todos los elementos que tengan la clase de carousel : */
    M.Carousel.init(elementosCarrusel, {  /*M es parte de materialaise : queremos acceder a Carousel y que queremos iniciar : poner 2 parametroos : el primero los carruseles que tenemos : : el segundo parametro es un objeto */
        duration: 150 , /* establecer la duracion que queremos en milesegundos */
        dist: -80, /*se hacegrande cuando sale*/
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: true, /*si queremos que empiese con la primera img  */
        // fullWidth: true,
        // indicators: true,
        // onCycleTo: function(index){}
    });
});
// Agrega una clase al elemento <h1>
document.getElementById("texto").classList.add("clase-dinamica");
