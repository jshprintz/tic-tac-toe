console.log('JS works');

let userChoice = 'X';
let strMessage = '';
let sqOnePicked = false;
let sqTwoPicked = false;
let sqThreePicked = false;
let sqFourPicked = false;
let sqFivePicked = false;
let sqSixPicked = false;
let sqSevenPicked = false;
let sqEightPicked = false;
let sqNinePicked = false;


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
const messageEl = document.getElementById('header')

chooseSquareEl.addEventListener('click', chooseSquare);


function init(){

};

function render(){

};

// Eventlistener listening for user's click
function chooseSquare(e){
    if (e.target === sqOneEl){
        //Test to see if square was already picked
        if (sqOnePicked === true){
            console.log('square one picked');
            return;
        } else {
            sqOnePicked = true;
        }
        //Changes square to appropriate mark
        sqOneEl.innerText = userChoice; 
    } else if (e.target === sqTwoEl){
                //Test to see if square was already picked
                if (sqTwoPicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqTwoPicked = true;
                }
                //Changes square to appropriate mark
        sqTwoEl.innerText = userChoice;
    } else if (e.target === sqThreeEl){
                //Test to see if square was already picked
                if (sqThreePicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqThreePicked = true;
                }
                //Changes square to appropriate mark
        sqThreeEl.innerText = userChoice;
    } else if (e.target === sqFourEl){
                //Test to see if square was already picked
                if (sqFourPicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqFourPicked = true;
                }
                //Changes square to appropriate mark
        sqFourEl.innerText = userChoice; 
    } else if (e.target === sqFiveEl){
                //Test to see if square was already picked
                if (sqFivePicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqFivePicked = true;
                }
                //Changes square to appropriate mark
        sqFiveEl.innerText = userChoice;
    } else if (e.target === sqSixEl){
                //Test to see if square was already picked
                if (sqSixPicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqSixPicked = true;
                }
                //Changes square to appropriate mark
        sqSixEl.innerText = userChoice;
    } else if (e.target === sqSevenEl){
                //Test to see if square was already picked
                if (sqSevenPicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqSevenPicked = true;
                }
                //Changes square to appropriate mark
        sqSevenEl.innerText = userChoice; 
    } else if (e.target === sqEightEl){
                //Test to see if square was already picked
                if (sqEightPicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqEightPicked = true;
                }
                //Changes square to appropriate mark
        sqEightEl.innerText = userChoice; 
    } else if (e.target === sqNineEl){
                //Test to see if square was already picked
                if (sqNinePicked === true){
                    console.log('square one picked');
                    return;
                } else {
                    sqNinePicked = true;
                }
                //Changes square to appropriate mark
        sqNineEl.innerText = userChoice;
    }

    userChoice === 'X' ? userChoice = 'O' : userChoice = 'X';
    
};


