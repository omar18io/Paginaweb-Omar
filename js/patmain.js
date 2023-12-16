const carousel = document.querySelector('.carousel');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        const slideWidth = slides[0].clientWidth;
        function updateSlidePosition() {
            const offset = -currentIndex * slideWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });
const verMasBtn = document.getElementById('ver-mas-btn');
const imagenPopup = document.getElementById('imagen-popup');
const verMenosBtn = document.getElementById('ver-menos-btn');
const textoAdicional = document.querySelector('.texto-adicional');
verMasBtn.addEventListener('click', function() {
  imagenPopup.style.display = 'block';
  textoAdicional.style.display = 'block';
});
verMenosBtn.addEventListener('click', function() {
  imagenPopup.style.display = 'none';
  textoAdicional.style.display = 'none';
});
