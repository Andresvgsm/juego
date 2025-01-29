const boton_iniciar = document.getElementById('iniciar');
const boton_ajustes = document.getElementById('ajustes');
const boton_cargar = document.getElementById('cargar');
const intro = document.getElementById('intro');
const pantalla_principal = document.querySelector('.pantalla_principal');


boton_iniciar.addEventListener('click', () => {

    boton_iniciar.disabled = true;
    boton_ajustes.disabled = true;
    boton_cargar.disabled = true;
    for (let i = 0; i < 50; i++) {
        const img = document.createElement('img');
        img.src = '../imagenes/nube1 (2).png';
        img.className = 'div-animado div1';
        const posX = Math.random() * window.innerWidth*-0.1;
        const posY = Math.random() * window.innerHeight*-0.1;

        img.style.left = `${posX}px`;
        img.style.top = `${posY}px`;
        img.style.position = 'absolute';

        intro.appendChild(img);
    }
    for (let i = 0; i < 300; i++) {
        const img = document.createElement('img');
        img.src = '../imagenes/nube1 (2).png';
        img.className = 'div-animado div1';
        const posX = Math.random() * window.innerWidth * -0.1;
        const posY = Math.random() * window.innerHeight;

        img.style.left = `${posX}px`;
        img.style.top = `${posY}px`;
        img.style.position = 'absolute';

        intro.appendChild(img);
    }
    for (let i = 0; i < 100; i++) {
        const img = document.createElement('img');
        img.src = '../imagenes/nube1 (2).png';
        img.className = 'div-animado div1';
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight * -0.1;

        img.style.left = `${posX}px`;
        img.style.top = `${posY}px`;
        img.style.position = 'absolute';

        intro.appendChild(img);
    }
    
    for (let i = 0; i < 400; i++) {
        const img = document.createElement('img');
        img.src = '../imagenes/nube1 (2).png';
        img.className = 'div-animado div1';
        const posX = Math.random() * window.innerWidth * 0.9;
        const posY = Math.random() * window.innerHeight * 0.9;

        img.style.left = `${posX}px`;
        img.style.top = `${posY}px`;
        img.style.position = 'absolute';

        intro.appendChild(img);
    }
    
    

    const divs = document.querySelectorAll('.div-animado');

    divs.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add('activo');
        }, index * 1);
    });
    setTimeout(() => {
        divs.forEach(div => {
            div.classList.add('oculto');
        });
        

        pantalla_principal.style.opacity = "0";
        pantalla_principal.style.pointerEvents = "none";
        pantalla_principal.classList.add('oculto');
        intro.classList.add('oculto');
        pantalla_principal.remove();
        setTimeout(() => {
            
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