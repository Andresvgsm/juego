const boton_iniciar = document.getElementById('iniciar');
const boton_ajustes = document.getElementById('ajustes');
const boton_cargar = document.getElementById('cargar');
const intro = document.getElementById('intro');
const pantalla_principal = document.querySelector('.pantalla_principal');


boton_iniciar.addEventListener('click', () => {

    boton_iniciar.disabled = true;
    boton_ajustes.disabled = true;
    boton_cargar.disabled = true;
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = '../imagenes/nube1 (2).png';
        img.alt = `Imagen ${i + 1}`;
        img.className = 'div-animado div1';
        intro.appendChild(img);
    }

    const divs = document.querySelectorAll('.div-animado');

    divs.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add('activo');
        }, index * 100);
    });
    setTimeout(() => {
        divs.forEach(div => {
            div.classList.add('oculto');
        });
        
        pantalla_principal.classList.add('oculto');
        setTimeout(() => {
            pantalla_principal.remove();
            cambiarPantalla('juego'); 
        }, 1000);
    }, 5000);
});

function cambiarPantalla(idPantalla) {
    try {
        const pantallas = document.querySelectorAll('.pantalla');
        pantallas.forEach(pantalla => pantalla.classList.remove('activa'));

        const pantallaSeleccionada = document.getElementById(idPantalla);
        if (pantallaSeleccionada) {
            pantallaSeleccionada.classList.add('activa');
        } else {
            console.error(`Pantalla con id "${idPantalla}" no encontrada.`);
        }
    } catch (error) {
        console.error('Error al cambiar de pantalla:', error);
    }
}


boton_ajustes.addEventListener('click', () => {
    cambiarPantalla(juego)
});

boton_cargar.addEventListener('click', () => {
    alert('Cargando partida guardada...');
});