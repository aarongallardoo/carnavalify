const imagenes = document.querySelectorAll('.carrusel-imagenes img');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
let indice = 0;

function mostrarImagen(indiceNuevo) {
    imagenes[indice].classList.remove('activo');
    indice = (indiceNuevo + imagenes.length) % imagenes.length;
    imagenes[indice].classList.add('activo');
}

prevBtn.addEventListener('click', () => mostrarImagen(indice - 1));
nextBtn.addEventListener('click', () => mostrarImagen(indice + 1));
