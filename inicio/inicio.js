const boton_iniciar = document.getElementById('iniciar');
const boton_ajustes = document.getElementById('ajustes');
const boton_cargar = document.getElementById('cargar');

const boton_guerrero = document.getElementById('boton_guerrero');
const boton_mago = document.getElementById('boton_mago');
const boton_arquero = document.getElementById('boton_arquero');

const boton_guerrero_enemigo = document.getElementById('boton_guerrero_enemigo');
const boton_mago_enemigo = document.getElementById('boton_mago_enemigo');
const boton_arquero_enemigo = document.getElementById('boton_arquero_enemigo');

const boton_ataque1 = document.getElementById('ataque1');
const boton_ataque2 = document.getElementById('ataque2');
const boton_ataque3 = document.getElementById('ataque3');
const boton_ataque4 = document.getElementById('ataque4');

let contadorClics = 0;
let temporizador;
let prota;
let enemigo;
let vida_mago = 100;
let vida_guerrero = 150;
let vida_arquero = 120;
let vida_enemigo = 0;

const intro = document.getElementById('intro');
const pantalla_principal = document.querySelector('.pantalla_principal');


boton_iniciar.addEventListener('click', () => {

    boton_iniciar.disabled = true;
    boton_ajustes.disabled = true;
    boton_cargar.disabled = true;

    animacion()
    setTimeout(() => {
        cargarPagina('extras/seleccionPers.html')
        var ctx = canvas.getContext('2d');
    }, 2200);

});

function animacion() {
    for (let i = 0; i < 50; i++) {
        const img = document.createElement('img');
        img.src = 'imagenes/nube1 (2).png';
        img.className = 'div-animado div1';
        const posX = Math.random() * window.innerWidth * -0.1;
        const posY = Math.random() * window.innerHeight * -0.1;

        img.style.left = `${posX}px`;
        img.style.top = `${posY}px`;
        img.style.position = 'absolute';

        intro.appendChild(img);
    }
    for (let i = 0; i < 100; i++) {
        const img = document.createElement('img');
        img.src = 'imagenes/nube1 (2).png';
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
        img.src = 'imagenes/nube1 (2).png';
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
        img.src = 'imagenes/nube1 (2).png';
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

    }, 2000);


}
function cargarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById("contenido").innerHTML = html;
        })
        .alert(error => console.error("Error cargando la página:", error));
}



boton_ajustes.addEventListener('click', () => {
    alert('Aun no esta disponible esta opcion');
});

boton_cargar.addEventListener('click', () => {
    alert('Todavia no has guardado ninguna partida genio.');
});

var canvas = document.getElementById('animacion');

var video = document.getElementById('video');

function video(video) {
    video.addEventListener('loadedmetadata', function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });

    video.addEventListener('play', function () {
        var $this = this;
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx.drawImage($this, 0, 0);
                setTimeout(loop, 1000 / 30);
            }
        })();
    }, 0);
}

function accionClick(personaje) {
    contadorClics++;

    clearTimeout(temporizador);

    temporizador = setTimeout(() => {
        switch (personaje) {
            case "mago":
                if (contadorClics === 1) {
                    alert("🧙‍♂️ El mago lanza un hechizo de fuego.");
                } else if (contadorClics === 2) {

                    cargarPagina('extras/seleccionEnemigo.html')
                }
                break;

            case "guerrero":
                if (contadorClics === 1) {
                    alert("⚔️ El guerrero golpea con su espada.");
                } else if (contadorClics === 2) {
                    alert("💥 El guerrero realiza un ataque especial.");
                }
                break;

            case "arquero":
                if (contadorClics === 1) {
                    alert("🏹 El arquero dispara una flecha.");
                } else if (contadorClics === 2) {
                    alert("🎯 El arquero dispara una ráfaga de flechas.");
                }
                break;
            case "mago_enemigo":
                if (contadorClics === 1) {
                    alert("🧙‍♂️ El mago lanza un hechizo de fuego.");
                } else if (contadorClics === 2) {
                    enemigo = "mago"
                    vida_enemigo = 100;
                    cargarPagina('extras/juego_mago.html')
                }
                break;

            case "guerrero_enemigo":
                if (contadorClics === 1) {
                    alert("⚔️ El guerrero golpea con su espada.");
                } else if (contadorClics === 2) {
                    alert("💥 El guerrero realiza un ataque especial.");
                }
                break;

            case "arquero_enemigo":
                if (contadorClics === 1) {
                    alert("🏹 El arquero dispara una flecha.");
                } else if (contadorClics === 2) {
                    alert("🎯 El arquero dispara una ráfaga de flechas.");
                }
                break;
        }

        contadorClics = 0;
    }, 300);
}

function inicializarAtaques(prota, ataque) {

    switch (prota) {
        case "mago":
            switch (ataque) {
                case 1:
                    vida_enemigo -= 10;
                    alert(`🔥 El mago lanza una bola de fuego. Vida enemigo: ${vida_enemigo}`);
                    vida_mago -= 5;
                    alert(`el enemigo ataca con una fuerza similar a la tuya: ${vida_mago}`);
                    break;
                case 2:
                    vida_enemigo -= 15;
                    alert(`🔥 El mago lanza una tormenta. Vida enemigo: ${vida_enemigo}`);
                    break;
                case 3:
                    vida_enemigo -= 20;
                    alert(`🔥 El mago lanza un tsunami. Vida enemigo: ${vida_enemigo}`);
                    break;
                case 4:
                    vida_prota += 10;
                    alert(`✨ El mago se cura. Vida protagonista: ${vida_prota}`);
                    break;
                default:
                    alert("⚠️ Opción inválida.");
            }


        case "guerrero":
            boton_ataque1.addEventListener('click', () => {
                vida_enemigo -= 15;
                alert(`⚔️ El guerrero golpea con su espada. Vida enemigo: ${vida_enemigo}`);
            });
            break;

        case "arquero":
            boton_ataque1.addEventListener('click', () => {
                vida_enemigo -= 8;
                alert(`🏹 El arquero dispara una flecha. Vida enemigo: ${vida_enemigo}`);
            });
            break;
    }
}