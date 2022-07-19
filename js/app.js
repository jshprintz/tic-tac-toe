console.log('JS works');

const userChoice = 'X';


// cache the DOM elements
const sqOneEl = document.getElementById('sqOne');
const sqTwoEl = document.getElementById('sqTwo');
const sqThreeEl = document.getElementById('sqThree');
const sqFourEl = document.getElementById('sqFour');
const sqFiveEl = document.getElementById('sqFive');
const sqSixEl = document.getElementById('sqSix');
const sqSevenEl = document.getElementById('sqSeven');
const sqEightEl = document.getElementById('sqEight');
const sqNineEl = document.getElementById('sqNine');

const replayEl = document.getElementById('replay');
const chooseSquareEl = document.getElementById('square');

chooseSquareEl.addEventListener('click', chooseSquare);



function init(){

};

function render(){

};

function chooseSquare(e){
    if (e.target === sqOneEl){
        sqOneEl.innerText = userChoice;  
    }

};

