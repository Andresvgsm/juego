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

});

boton_ajustes.addEventListener('click', () => {
    alert('Abriendo ajustes...');
});

boton_cargar.addEventListener('click', () => {
    alert('Cargando partida guardada...');
});