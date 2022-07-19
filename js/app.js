console.log('JS works');
//Define starting variables

let userChoice = 'X';
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
const messageEl = document.getElementById('header');

chooseSquareEl.addEventListener('click', render);
messageEl.innerText = 'X Goes First!'

init();

function init(){
    userChoice = 'X';
    sqOnePicked = false;
    sqTwoPicked = false;
    sqThreePicked = false;
    sqFourPicked = false;
    sqFivePicked = false;
    sqSixPicked = false;
    sqSevenPicked = false;
    sqEightPicked = false;
    sqNinePicked = false;
    messageEl.innerText = 'X Goes First!'
};

// Eventlistener listening for user's click
function render(e){
    if (e.target === sqOneEl){
        //Test to see if square was already picked
        if (sqOnePicked === true){
            messageEl.innerText = 'That Square Was Already Picked!';
            return;
        } else {
            sqOnePicked = true;
        }
        //Changes square to appropriate mark
        sqOneEl.innerText = userChoice; 
    } else if (e.target === sqTwoEl){
                //Test to see if square was already picked
                if (sqTwoPicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqTwoPicked = true;
                }
                //Changes square to appropriate mark
        sqTwoEl.innerText = userChoice;
    } else if (e.target === sqThreeEl){
                //Test to see if square was already picked
                if (sqThreePicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqThreePicked = true;
                }
                //Changes square to appropriate mark
        sqThreeEl.innerText = userChoice;
    } else if (e.target === sqFourEl){
                //Test to see if square was already picked
                if (sqFourPicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqFourPicked = true;
                }
                //Changes square to appropriate mark
        sqFourEl.innerText = userChoice; 
    } else if (e.target === sqFiveEl){
                //Test to see if square was already picked
                if (sqFivePicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqFivePicked = true;
                }
                //Changes square to appropriate mark
        sqFiveEl.innerText = userChoice;
    } else if (e.target === sqSixEl){
                //Test to see if square was already picked
                if (sqSixPicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqSixPicked = true;
                }
                //Changes square to appropriate mark
        sqSixEl.innerText = userChoice;
    } else if (e.target === sqSevenEl){
                //Test to see if square was already picked
                if (sqSevenPicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqSevenPicked = true;
                }
                //Changes square to appropriate mark
        sqSevenEl.innerText = userChoice; 
    } else if (e.target === sqEightEl){
                //Test to see if square was already picked
                if (sqEightPicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqEightPicked = true;
                }
                //Changes square to appropriate mark
        sqEightEl.innerText = userChoice; 
    } else if (e.target === sqNineEl){
                //Test to see if square was already picked
                if (sqNinePicked === true){
                    messageEl.innerText = 'That Square Was Already Picked!';
                    return;
                } else {
                    sqNinePicked = true;
                }
                //Changes square to appropriate mark
        sqNineEl.innerText = userChoice;
    }
    checkWin();
    playerSwitch();
};

// Switches back and forth between users.
function playerSwitch(){
    userChoice === 'X' ? userChoice = 'O' : userChoice = 'X';
    messageEl.innerText = `It's ${userChoice}'s Turn!`;
}

// Checks to see if either player won

