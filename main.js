const personaje = document.getElementById('personaje');
let posicionX = 0;

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowRight') {
        // Mover 10px a la derecha
        posicionX += 10;
        personaje.style.left = posicionX + 'px';
    }
});