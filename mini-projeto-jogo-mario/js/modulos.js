const mario = document.querySelector('#mario');

//Funcao de audio
const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.play();
};

const stopSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.pause();
};

const pular = (event) => {
    if (event.key === 'ArrowUp') {
        mario.classList.add('pular');

        playSom('somPulo');

        setTimeout(() => {
            mario.classList.remove('pular');
        }, 500)
    };
};

//document.addEventListener('keydown', pular);

const voar = (event) => {
    if(event.key === ' ') {
        mario.classList.add('voar');

        mario.src = './img/mario-voando.png';

        playSom('somVoar')

        setTimeout(() => {
            mario.classList.remove('voar');
            mario.src = './img/mario.gif'
        }, 1500)
    }
};

//document.addEventListener('keydown', voar);

const abaixar = ({key}) => {
    if (key === 'ArrowDown') {

        mario.classList.add('abaixar');
        mario.src = './img/mario-agachado.png';

        playSom('somAgachado');
    }
}

//document.addEventListener('keydown', abaixar);

const levantar = ({key}) => {

    if (key === 'ArrowDown') {

        mario.classList.remove('abaixar');
        mario.src = './img/mario.gif';
    }
}

//document.addEventListener('keyup', levantar);



export {playSom, stopSom, pular, voar, abaixar, levantar};