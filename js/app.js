console.log('JS works');
//Define starting variables

let userChoice = '';

let sqOnePicked = false;
let sqTwoPicked = false;
let sqThreePicked = false;
let sqFourPicked = false;
let sqFivePicked = false;
let sqSixPicked = false;
let sqSevenPicked = false;
let sqEightPicked = false;
let sqNinePicked = false;
let b1 = '';
let b2 = '';
let b3 = '';
let b4 = '';
let b5 = '';
let b6 = '';
let b7 = '';
let b8 = '';
let b9 = '';

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

// initialize program
init();

function init(){
    // Reset booleans
    userChoice = Math.floor(Math.random() * 2)
    userChoice === 0 ? userChoice = 'X' : userChoice = 'O';
    sqOnePicked = false;
    sqTwoPicked = false;
    sqThreePicked = false;
    sqFourPicked = false;
    sqFivePicked = false;
    sqSixPicked = false;
    sqSevenPicked = false;
    sqEightPicked = false;
    sqNinePicked = false;
    messageEl.innerText = `${userChoice}'s Goes First!`

    // Reset inner squares
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

    // Resets eventlisteners
    replayEl.removeEventListener('click', init);
    chooseSquareEl.addEventListener('click', render);
};

// Eventlistener listening for user's click
function render(e){
    if (e.target === sqOneEl){
        //Test to see if square was already picked
        if (sqOnePicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqOnePicked = true;
        }
        //Changes square to appropriate mark
        sqOneEl.innerText = userChoice; 
    } else if (e.target === sqTwoEl){
        //Test to see if square was already picked
        if (sqTwoPicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqTwoPicked = true;
        }
        //Changes square to appropriate mark
        sqTwoEl.innerText = userChoice;
    } else if (e.target === sqThreeEl){
        //Test to see if square was already picked
        if (sqThreePicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqThreePicked = true;
        }
        //Changes square to appropriate mark
        sqThreeEl.innerText = userChoice;
    } else if (e.target === sqFourEl){
        //Test to see if square was already picked
        if (sqFourPicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqFourPicked = true;
        }
        //Changes square to appropriate mark
        sqFourEl.innerText = userChoice; 
    } else if (e.target === sqFiveEl){
        //Test to see if square was already picked
        if (sqFivePicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqFivePicked = true;
        }
        //Changes square to appropriate mark
        sqFiveEl.innerText = userChoice;
    } else if (e.target === sqSixEl){
        //Test to see if square was already picked
        if (sqSixPicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqSixPicked = true;
        }
        //Changes square to appropriate mark
        sqSixEl.innerText = userChoice;
    } else if (e.target === sqSevenEl){
        //Test to see if square was already picked
        if (sqSevenPicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqSevenPicked = true;
        }
        //Changes square to appropriate mark
        sqSevenEl.innerText = userChoice; 
    } else if (e.target === sqEightEl){
        //Test to see if square was already picked
        if (sqEightPicked === true){
            dispAlreadyPicked();
            return;
        } else {
            sqEightPicked = true;
        }
        //Changes square to appropriate mark
        sqEightEl.innerText = userChoice; 
    } else if (e.target === sqNineEl){
        //Test to see if square was already picked
        if (sqNinePicked === true){
            dispAlreadyPicked();
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

//Display already picked message
function dispAlreadyPicked(){
    messageEl.innerText = 'That Square Was Already Picked!';
};

// Checks to see if either player won
function checkWin(){
    // Stores all the inner text in more readable strings
    b1 = sqOneEl.innerText;
    b2 = sqTwoEl.innerText;
    b3 = sqThreeEl.innerText;
    b4 = sqFourEl.innerText;
    b5 = sqFiveEl.innerText;
    b6 = sqSixEl.innerText;
    b7 = sqSevenEl.innerText;
    b8 = sqEightEl.innerText;
    b9 = sqNineEl.innerText;

    if ((b1 === b2) && (b1 === b3) && (b1 === userChoice)){  //first row horizontal
        userChoice += `'s`;
        replay();
    } else if ((b1 === b4) && (b1 === b7) && (b1 === userChoice)){ //first column vertical
        userChoice += `'s`;
        replay();
    } else if ((b1 === b5) && (b1 === b9) && (b1 === userChoice)){ //back slash diagnol
        userChoice += `'s`;
        replay();
    } else if ((b3 === b5) && (b3 === b7) && (b3 === userChoice)){ //forward slash diagnol
        userChoice += `'s`;
        replay();
    } else if ((b3 === b6) && (b3 === b9) && (b3 === userChoice)){ //third column vertical
        userChoice += `'s`;
        replay();
    } else if ((b9 === b8) && (b9 === b7) && (b9 === userChoice)){ //third row horizontal
        userChoice += `'s`;
        replay();
    } else if ((b4 === b5) && (b4 === b6) && (b4 === userChoice)){ //second row horizontal
        userChoice += `'s`;
        replay();
    } else if ((b2 === b5) && (b2 === b8) && (b2 === userChoice)){ //second column vertical
        userChoice += `'s`;
        replay();
    } else if ((b1 !== '') && (b2 !== '') && (b3 !== '') && (b4 !== '') && (b5 !== '') && (b6 !== '') && (b7 !== '') && (b8 !== '') && (b9 !== '')){ //no winners
        userChoice = 'NOBODY'
        replay();
    } else {
        playerSwitch();
    }
    
}

//Load up the replay option
function replay(){
    //Turns off user click for board
    chooseSquareEl.removeEventListener('click', render);
    //Turns on user click for replay button
    replayEl.addEventListener('click', init);
    //Creates replay button
    messageEl.innerText = `${userChoice} WON! Play Again?`;
    replayEl.innerText = 'YES! Play Again';
    replayEl.style.position = 'fixed';
    replayEl.style.top = '100px';
    replayEl.style.left = '100px';
    replayEl.style.border = '5px solid black';
    replayEl.style.padding = '10px';
    replayEl.style.fontSize = 'x-large';
    replayEl.style.backgroundImage = 'linear-gradient(to top, #80e3dd, #99e7f1, #b7ebfd, #d5efff, #ecf4ff, #ecf4ff, #ecf4ff, #ecf4ff, #d5efff, #b7ebfd, #99e7f1, #80e3dd)';
};
