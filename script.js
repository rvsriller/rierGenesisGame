let order = []; //order of colors
let clickedOrder = []; //order of player clicks
let score = 0;

/*
0 - grun (verde)
1 - rot (vermelho)
2 - gelb (amarelo)
3 - blau (azul)
*/

const blau = document.querySelector('.blau');
const rot = document.querySelector('.rot');
const grun = document.querySelector('.grun');
const gelb = document.querySelector('.gelb');

//find a order of colors to present in game
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder; //size of vector equal to number generated
    clickOrder = [];
    
    //Light On following the numbers generated - Order of color

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1) //take a number + one to existis in list of colors
    }
}


//light color generate
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo -250);

    //turn off
    setTimeout(() => {
        element.classList.remove('selected');
    })

}
