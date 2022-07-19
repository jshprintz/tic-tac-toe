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
let oneText = '';
let twoText = '';
let threeText = '';
let fourText = '';
let fiveText = '';
let sixText = '';
let sevenText = '';
let eightText = '';
let nineText = '';

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
replayEl.addEventListener('click', init);
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

    sqOneEl.innerText = '';
    sqTwoEl.innerText = '';
    sqThreeEl.innerText = '';
    sqFourEl.innerText = '';
    sqFiveEl.innerText = '';
    sqSixEl.innerText = '';
    sqSevenEl.innerText = '';
    sqEightEl.innerText = '';
    sqNineEl.innerText = '';

    //Reset Replay button
    replayEl.innerText = '';
    replayEl.style.position = 'fixed';
    replayEl.style.top = '0px';
    replayEl.style.left = '100000px';
    replayEl.style.border = '5px solid black';
    replayEl.style.padding = '10px';
    replayEl.style.fontSize = 'x-large';
    replayEl.style.backgroundColor = 'lightgreen';

    replayEl.removeEventListener('click', init);
    chooseSquareEl.addEventListener('click', render);
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
};

// Switches back and forth between users.
function playerSwitch(){
    userChoice === 'X' ? userChoice = 'O' : userChoice = 'X';
    messageEl.innerText = `It's ${userChoice}'s Turn!`;
}

// Checks to see if either player won
function checkWin(){
    oneText = sqOneEl.innerText;
    twoText = sqTwoEl.innerText;
    threeText = sqThreeEl.innerText;
    fourText = sqFourEl.innerText;
    fiveText = sqFiveEl.innerText;
    sixText = sqSixEl.innerText;
    sevenText = sqSevenEl.innerText;
    eightText = sqEightEl.innerText;
    nineText = sqNineEl.innerText;

    if ((oneText === twoText) && (oneText === threeText) && (oneText === userChoice)){
        replay();
    } else if ((oneText === fourText) && (oneText === sevenText) && (oneText === userChoice)){
        replay();
    } else if ((oneText === fiveText) && (oneText === nineText) && (oneText === userChoice)){
        replay();
    } else if ((threeText === fiveText) && (threeText === sevenText) && (threeText === userChoice)){
        replay();
    } else if ((threeText === sixText) && (threeText === nineText) && (threeText === userChoice)){
        replay();
    } else if ((nineText === eightText) && (nineText === sevenText) && (nineText === userChoice)){
        replay();
    } else if ((fourText === fiveText) && (fourText === sixText) && (fourText === userChoice)){
        replay();
    } else if ((twoText === fiveText) && (twoText === eightText) && (twoText === userChoice)){
        replay();
    } else {
        playerSwitch();
    }
    
}

//Load up the replay option
function replay(){
    chooseSquareEl.removeEventListener('click', render);
    replayEl.addEventListener('click', init);
    
    messageEl.innerText = `${userChoice}'s WON! Play Again?`;
    replayEl.innerText = 'YES! Play Again';
    replayEl.style.position = 'fixed';
    replayEl.style.top = '100px';
    replayEl.style.left = '100px';
    replayEl.style.border = '5px solid black';
    replayEl.style.padding = '10px';
    replayEl.style.fontSize = 'x-large';
    replayEl.style.backgroundColor = 'lightgreen';
};
