const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const score = document.querySelector(".score");
let contScore = 0;

function jump (){
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 85){
        score.style.visibility = "hidden";

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '30px';
        mario.style.marginBottom = '30px';

        swal("GAME-OVER!", `SCORE: ${contScore}`, "error")
        .then(() => {
            location.reload();
        });

        contScore = 0;
        clearInterval(loop);
    }
    contScore++;
    score.innerHTML = `SCORE: ${contScore}`;
}, 10);

document.addEventListener('keydown', (e) => {
    if((e.code === "ArrowUp") | (e.code === "Space") | (e.keyCode === 87)){
        jump();
    }
});