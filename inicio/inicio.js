const boton_iniciar = document.getElementById('iniciar');
const boton_ajustes = document.getElementById('ajustes');
const boton_cargar = document.getElementById('cargar');

boton_iniciar.addEventListener('click', () => {
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
        }, 1000);
        
    }, 5000);
    
});
function cambiarPantalla(idPantalla) {
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(pantalla => pantalla.classList.remove('activa'));

    const pantallaSeleccionada = document.getElementById(idPantalla);
    pantallaSeleccionada.classList.add('activa');
}

boton_ajustes.addEventListener('click', () => {
    cambiarPantalla(juego)
});

boton_cargar.addEventListener('click', () => {
    alert('Cargando partida guardada...');
});