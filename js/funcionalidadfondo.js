// Script para cambiar el color de fondo al hacer clic
document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#f7f7f7', '#b8d9a6', '#9ba0e1', '#ffcccb']; // Lista de colores
    let index = 0;
    function changeColor() {
        const fondoColorElement = document.querySelector('.fondo-color');
        if(fondoColorElement){
            fondoColorElement.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        }
    }
    setInterval(changeColor, 3000); // Cambiar el color cada 3 segundos
});
// ------------------------------------------------------------------------------------------
(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
        });
    });
})();
