let order = []; //order of colors
let clickedOrder = []; //order of player clicks
let score = 0;

/*
0 - grun (verde)
1 - rot (vermelho)
2 - gelb (amarelo)
3 - blau (azul)
*/

//Finding HTML elements (grids) by classes
let blau = document.querySelector('.blau');
let rot = document.querySelector('.rot');
let grun = document.querySelector('.grun');
let gelb = document.querySelector('.gelb');



//create an order of colors to present in game
let shuffleOrder = () => {
    //Generating numbers between 0 and 3
    let colorOrder = Math.floor(Math.random() * 4);
    
    order[order.length] = colorOrder; //size of vector equal to number generated
    clickedOrder = [];
    
    //Light On following the numbers generated - Order of color

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColorOn(elementColor, Number(i) + 1) //take a number + one to existis in list of colors
    }
}



//light color ON - generate
let lightColorOn = (elementColor, tempo) => {
    tempo = tempo * 500;
    setTimeout(() => {
        elementColor.classList.add('selected');
    }, tempo -250);

    //turn off
    setTimeout(() => {
        elementColor.classList.remove('selected');
    }, tempo);

}


//Comparing order of game colors and player color selections
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! \n Iniciando próximo nível!`);
        nextLevel();
    }
}


//Verifying if all clicks of player are equal to game colors
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}


//Create color element function
let createColorElement = (color) => {
    if(color == 0){
        return grun;
    } else if(color == 1){
        return rot;
    } else if(color == 2){
        return gelb;
    } else if(color == 3) {
        return blau;
    }
}


//Next level function
let nextLevel = () => {
    score++;
    shuffleOrder();
}



//Game over function
let gameOver = () => {
    alert(` VOCÊ PERDEU O JOGO \n Pontuação: ${score}! \n Clique em OK para iniciar novo jogo`);
    
    order = [];
    clickedOrder = [];
    //after reset all parameters, it can starts a new game

    playGame();
}

//reset level and start game
let playGame = () => {
    alert('Bem vindo ao Genius Game. \n Vamos iniciar um novo jogo!');
    score = 0;

    nextLevel();
}


/* Click listening
grun.addEventListener('click', click(0));
rot.addEventListener('click', click(1));
gelb.addEventListener('click', click(2));
blau.addEventListener('click', click(3)); */


//Click events for colors 
grun.onclick = () => click(0);
rot.onclick = () => click(1);
gelb.onclick = () => click(2);
blau.onclick = () => click(3);


//Start game after alert
playGame();