const boton = document.getElementById('apagarVela');
const contenido = document.getElementById('contenido');
const sonido = document.getElementById('sonidoCumple');
const torta = document.getElementById('torta');

boton.addEventListener('click', () => {
    // Efecto de desvanecer antes del cambio de imagen
    torta.style.opacity = '0';
  
    setTimeout(() => {
      // Cambiar imagen y volver a mostrar
      torta.src = 'img/torta2.png';
      torta.style.filter = 'grayscale(100%)';
      torta.style.opacity = '1';
  
      // Esperar a que termine la transición para cambiar de pantalla
      setTimeout(() => {
        document.querySelector('.intro').style.display = 'none';
        contenido.style.display = 'block';
        sonido.play();
        mostrarGlobos();
      }, 1500); // este tiempo debe ser igual al de la transición CSS
    }, 300); // este tiempo permite que la imagen original se desvanezca primero
  });

// Carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
document.getElementById('next').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

// Globos
function mostrarGlobos() {
  const container = document.getElementById('globos-container');
  for (let i = 0; i < 20; i++) {
    const globo = document.createElement('div');
    globo.classList.add('globo');
    globo.style.left = `${Math.random() * 100}%`;
    globo.style.background = getColorPastel();
    container.appendChild(globo);
  }
}

function getColorPastel() {
  const colores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#bdb2ff'];
  return colores[Math.floor(Math.random() * colores.length)];
}
