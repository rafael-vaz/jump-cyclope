/**************************************  INTERAÇÃO COM O HERÓI  *************************************************/


//ARMAZENANDO O CONTEÚDO DA CLASSE HERÓI EM UMA CONSTANTE

const heroi = document.querySelector('.heroi');

const background = document.querySelector('.background');

const gameOver = document.querySelector('.game-over');

const valor = document.querySelector('.valor');

let score = 0;

valor.innerHTML = score;

let position = 30;  //VARIAVEL CRIADA PARA ARMAZENAR A POSIÇÃO DO PERSONAGEM


let isJumping = false; //CRIANDO VARIÁVEL PARA ARMAZENAR O ESTADO DO PULO


//CRIANDO UMA FUNÇÃO PARA ISOLAR UM DETERMINADO EVENTO APENAS PARA A TECLA SPACE

function handleKeyUp(event){

if(event.keyCode === 32) {

    console.log("você pressionou a tecla espaço!");
    
    if(!isJumping){

    jump();
}
}    

}

//REALIZANDO UM OUVINTE DE EVENTOS PARA RECEBER A AÇÃO DE PRESSIONAR A TECLA E A FUNÇÃO PARA DIFERENCIAR E DISPARAR O EVENTO

document.addEventListener('keyup', handleKeyUp);

//CRIANDO A VARIÁVEL POSIÇÃO


//CRIANDO UMA FUNÇÃO PARA REALIZAR O PULO DO PERSONAGEM

function jump(){

isJumping = true; //MUDANDO O ESTADO DO PULO PARA VERDADEIRO

//CRIANDO UMA FUNÇÃO DE SUBIDA PARA REALIZAR UMA DETERMINADA AÇÃO DENTRO DE UM INTERVALO DE TEMPO PRÉ-DEFINIDO

let upInterval = setInterval(() => {

if(position >= 180) {

    clearInterval(upInterval); //O CLEAR INTERVAL FAZ COM QUE A FUNÇÃO PARA DE SER EXECUTADA

let downInterval = setInterval(() => {   //CRIANDO A FUNÇÃO DE INTERVALO PARA A DESCIDA DO PERSONAGEM
    
    if(position <= 30){  //LIMITANDO A DESCIDA ATÉ OS 30PX DE BOTTOM
   
  clearInterval(downInterval);

  isJumping = false;

    } else  {
    position -= 20;

    heroi.style.bottom = position + 'px';
}
 }, 25);

} else {
position += 20;

heroi.style.bottom = position + 'px';

}
}, 25);
}

/**************************************  INTERAÇÃO COM O INIMIGO  *************************************************/

function createCyclope(){

let randomTime = Math.random() * 6000;    

const cyclope = document.createElement('div');

cyclope.classList.add('cyclope');

background.appendChild(cyclope);

cyclope.style.left = 1500 + 'px';


let cyclopePosition = 1500;


let leftInterval = setInterval(() => { 

if(cyclopePosition <= -60){

    score = score + 5;

    valor.innerHTML = score;

    clearInterval(leftInterval);

    background.removeChild(cyclope);

} else if (cyclopePosition > 0 && cyclopePosition < 30 && position < 160) {
   

   
    gameOver.innerHTML = 'GAME OVER';

    cyclope.style.display = 'none';
    heroi.style.display = 'none';

    
}

else {
cyclopePosition -= 10;

cyclope.style.left = cyclopePosition + 'px';

}

}, 30);

setTimeout(createCyclope, randomTime);

}


createCyclope();