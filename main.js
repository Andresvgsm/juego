const prota = document.getElementById('prota');
let posicionX = 100;
let posicionY = 100;



document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (posicionY >0){
            posicionY -= 10;}
            break;
        case 'ArrowDown':
            posicionY += 10;
            break;
        case 'ArrowLeft':
            if (posicionX >0){
            posicionX -= 10;}
            break;
        case 'ArrowRight':
            posicionX += 10;
            break;
    }

    prota.style.top = `${posicionY}px`;
    prota.style.left = `${posicionX}px`;
    
})