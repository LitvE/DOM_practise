'use script'

let grid = document.querySelector('#container');
const NUMBER = 208;
const COLORS = ['#7FFFD4', '#DC143C', '#7FFF00', '#0000FF', '#00BFFF'];

for(let i = 0; i < NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => changeColor(square));
    square.addEventListener('mouseleave', () => changeColorBack(square));
    grid.append(square);
};

function changeColor (elem) {
    const newColor = getNewColor();
    elem.style.backgroundColor = newColor;
};

function changeColorBack(elem){
    elem.style.backgroundColor = 'gray';
}

function getNewColor () {
    const indexColor = Math.floor(Math.random() * COLORS.length);
    return COLORS[indexColor];
}