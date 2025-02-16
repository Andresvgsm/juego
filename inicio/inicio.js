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
let vidaMaxima = 100
let vida_mago = 100;
let vida_guerrero = 100;
let vida_arquero = 100;
let vida_enemigo = 100;


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
                    prota == 'mago';
                    cargarPagina('extras/juego_mago.html')
                    
                }
                break;

            case "guerrero":
                if (contadorClics === 1) {
                    alert("⚔️ El guerrero golpea con su espada.");
                } else if (contadorClics === 2) {
                    cargarPagina('extras/juego_guerrero.html')
                }
                break;

            case "arquero":
                if (contadorClics === 1) {
                    alert("🏹 El arquero dispara una flecha.");
                } else if (contadorClics === 2) {
                    cargarPagina('extras/juego_arquero.html')
                }
                break;
            
        }

        contadorClics = 0;
    }, 300);
}

function reducirVida(objetivo, cantidad) {
    if (objetivo === 'mago') {
        vida_mago -= cantidad;
        if (vida_mago <= 0) {
            cargarPagina('extras/derrota.html')

        }

    } if (objetivo === 'guerrero') {
        vida_guerrero -= cantidad;
        if (vida_guerrero <= 0) {
            cargarPagina('extras/derrota.html')
        }

    } if (objetivo === 'arquero') {
        vida_arquero -= cantidad;
        if (vida_arquero <= 0) {
            cargarPagina('extras/derrota.html')
        }

    } else if (objetivo === 'enemigo') {
        vida_enemigo -= cantidad;
        if (vida_enemigo <= 0) {
            cargarPagina('extras/victoria.html')
        }
    }
}

const vidaMaxima_enemigo = vida_enemigo;
let vidaActual_enemigo = vidaMaxima_enemigo;

let vidaActual = vidaMaxima;
function inicializarAtaques(prota, ataque) {
    switch (prota) {
        case "mago":
            

            
            

            
            function actualizarBarraVida_enemigo() {
                let porcentaje = (vidaActual_enemigo / vidaMaxima_enemigo) * 100;
                document.getElementById("barra-vida-enemigo").style.width = porcentaje + "%";
            }

            
            function recibirDanio_enemigo(danio_enemigo ) {
                vidaActual_enemigo -= danio_enemigo ;
                if (vidaActual_enemigo < 0) vidaActual_enemigo = 0;
                actualizarBarraVida_enemigo();
            }

            function curar_enemigo(vida_enemigo ) {
                vidaActual_enemigo += vida_enemigo ;
                if (vidaActual_enemigo > vidaMaxima_enemigo) vidaActual_enemigo = vidaMaxima_enemigo;
                actualizarBarraVida_enemigo();
            }
            actualizarBarraVida_enemigo();
            function actualizarBarraVida() {
                let porcentaje = (vidaActual / vidaMaxima) * 100;
                document.getElementById("barra-vida").style.width = porcentaje + "%";
            }

            function recibirDanio(danio) {
                vidaActual -= danio;
                if (vidaActual < 0) vidaActual = 0; 
                actualizarBarraVida();
            }

            function curar(vida) {
                vidaActual += vida;
                if (vidaActual > vidaMaxima) vidaActual = vidaMaxima;
                actualizarBarraVida();
            }

            actualizarBarraVida();
            switch (ataque) {
                case 1:
                    reducirVida('enemigo', 5);
                    alert(`🔥 El mago lanza una bola de fuego. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 10);
                    recibirDanio(10)
                    recibirDanio_enemigo(5)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 2:
                    reducirVida('enemigo', 10);
                    alert(`🔥 El mago lanza una tormenta. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 5);
                    recibirDanio(5)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 3:
                    reducirVida('enemigo', 10);
                    alert(`🔥 El mago lanza un tsunami que no afecta como debetia al enemigo. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago',10);
                    recibirDanio(10)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 4:
                    
                    vida_mago += 10;
                    alert(`✨ El mago se cura. Vida mago: ${vida_mago}`);
                    curar(10)
                    alert(`el enemigo no consigue atacar en esta ronda`);
                    break;
            }
            break;

        case "guerrero":
            function actualizarBarraVida_enemigo() {
                let porcentaje = (vidaActual_enemigo / vidaMaxima_enemigo) * 100;
                document.getElementById("barra-vida-enemigo").style.width = porcentaje + "%";
            }

            
            function recibirDanio_enemigo(danio_enemigo ) {
                vidaActual_enemigo -= danio_enemigo ;
                if (vidaActual_enemigo < 0) vidaActual_enemigo = 0;
                actualizarBarraVida_enemigo();
            }

            function curar_enemigo(vida_enemigo ) {
                vidaActual_enemigo += vida_enemigo ;
                if (vidaActual_enemigo > vidaMaxima_enemigo) vidaActual_enemigo = vidaMaxima_enemigo;
                actualizarBarraVida_enemigo();
            }
            actualizarBarraVida_enemigo();
            function actualizarBarraVida() {
                let porcentaje = (vidaActual / vidaMaxima) * 100;
                document.getElementById("barra-vida").style.width = porcentaje + "%";
            }

            function recibirDanio(danio) {
                vidaActual -= danio;
                if (vidaActual < 0) vidaActual = 0; 
                actualizarBarraVida();
            }

            function curar(vida) {
                vidaActual += vida;
                if (vidaActual > vidaMaxima) vidaActual = vidaMaxima;
                actualizarBarraVida();
            }

            actualizarBarraVida();
            switch (ataque) {
                case 2:
                    reducirVida('enemigo', 5);
                    alert(`El guerrero realiza un ataque con su escudo que le deja un facil golpe a su enemigo. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 10);
                    recibirDanio(10)
                    recibirDanio_enemigo(5)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 3:
                    reducirVida('enemigo', 10);
                    alert(`El guerrero realiza un doble ataque . Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 5);
                    recibirDanio(5)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 1:
                    reducirVida('enemigo', 10);
                    alert(`El guerrero realiza un ataque simple. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago',10);
                    recibirDanio(10)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 4:
                    
                    vida_mago += 10;
                    alert(`✨ El guerrero se cura. Vida guerrero: ${vida_mago}`);
                    curar(10)
                    alert(`el enemigo no consigue atacar en esta ronda`);
                    break;
            }
            break;

        case "arquero":
            function actualizarBarraVida_enemigo() {
                let porcentaje = (vidaActual_enemigo / vidaMaxima_enemigo) * 100;
                document.getElementById("barra-vida-enemigo").style.width = porcentaje + "%";
            }

            
            function recibirDanio_enemigo(danio_enemigo ) {
                vidaActual_enemigo -= danio_enemigo ;
                if (vidaActual_enemigo < 0) vidaActual_enemigo = 0;
                actualizarBarraVida_enemigo();
            }

            function curar_enemigo(vida_enemigo ) {
                vidaActual_enemigo += vida_enemigo ;
                if (vidaActual_enemigo > vidaMaxima_enemigo) vidaActual_enemigo = vidaMaxima_enemigo;
                actualizarBarraVida_enemigo();
            }
            actualizarBarraVida_enemigo();
            function actualizarBarraVida() {
                let porcentaje = (vidaActual / vidaMaxima) * 100;
                document.getElementById("barra-vida").style.width = porcentaje + "%";
            }

            function recibirDanio(danio) {
                vidaActual -= danio;
                if (vidaActual < 0) vidaActual = 0; 
                actualizarBarraVida();
            }

            function curar(vida) {
                vidaActual += vida;
                if (vidaActual > vidaMaxima) vidaActual = vidaMaxima;
                actualizarBarraVida();
            }

            actualizarBarraVida();
            switch (ataque) {
                case 3:
                    reducirVida('enemigo', 5);
                    alert(`El arquero realiza un disparo que le sale mal. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 10);
                    recibirDanio(10)
                    recibirDanio_enemigo(5)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 1:
                    reducirVida('enemigo', 10);
                    alert(`El arquero realiza una lluvia de flechas . Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago', 5);
                    recibirDanio(5)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 2:
                    reducirVida('enemigo', 10);
                    alert(`El arquero realiza un disparo de una unica flecha. Vida enemigo: ${vida_enemigo}`);
                    reducirVida('mago',10);
                    recibirDanio(10)
                    recibirDanio_enemigo(10)
                    alert(`El enemigo ataca. Tu vida: ${vida_mago}`);
                    break;
                case 4:
                    
                    vida_mago += 10;
                    alert(`✨ El arquero se cura. Vida arquero: ${vida_mago}`);
                    curar(10)
                    alert(`el enemigo no consigue atacar en esta ronda`);
                    break;
            }
            break;

    }
}