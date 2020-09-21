//*************************/
//ALL VARIABLES

var playerNamesCont, scores, roundScore, activePlayer, nameZeroInp, nameOneInp, playerPanelCont, diceOne, diceTwo, rollDice, diceImgOne, diceImgTwo, winPoints, gamePlaying;


//**********************************/
//NEXT BUTTONS

//Rules button
playerNamesCont = document.querySelector('#names-inp-container');
nameZeroInp = document.querySelector('#name-0-inp');
nameOneInp = document.querySelector('#name-1-inp');
playerPanelCont = document.querySelector('#player-panel-container');

document.querySelector('#rules-btn').addEventListener('click', function () {
    document.querySelector('#rules-container').classList.add('display');
    playerNamesCont.classList.remove('display');
    playerNamesCont.style.height = '560px';
});

//Names Input Button
document.querySelector('#names-inp-btn').addEventListener('click', function () {
    if (nameZeroInp.value !== '' && nameOneInp.value !== '') {
        playerNamesCont.classList.add('display');
        playerPanelCont.style.display = 'flex';
        document.querySelector('#player-0-name').textContent = nameZeroInp.value;
        document.querySelector('#player-1-name').textContent = nameOneInp.value;
    } else {
        document.querySelector('#name-not-given').classList.remove('display');
    }
});


/*****************/
//ROLL DICE FUNCTION
winPoints = document.querySelector('#win-points');
diceImgOne = document.querySelector('#dice-img-0');
diceImgTwo = document.querySelector('#dice-img-1');

start()


rollDice = document.querySelector('#roll-dice-btn');



rollDice.addEventListener('click', function(){
    if(gamePlaying) {
    //Random number generator
    diceOne = Math.floor(Math.random() * 6) + 1;
    diceTwo = Math.floor(Math.random() * 6) + 1;

    //Display Number
    diceImgOne.style.display = 'block';
    diceImgTwo.style.display = 'block';
    diceImgOne.src = 'dice-' + diceOne + '.png';
    diceImgTwo.src = 'dice-' + diceTwo + '.png';

    //Update round score if its not equal to 1 and double sixes
    if (diceOne === 1 || diceTwo === 1) {
        roundScore = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        activePlayerChanger()
    } else if(diceOne === 6 && diceTwo === 6) {
        roundScore = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        scores[activePlayer] = 0;
        document.querySelector('#global-score-' + activePlayer).textContent = scores[activePlayer];
        activePlayerChanger()
    } else{
        roundScore += (diceOne + diceTwo);
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
    }
    } else {

    }
})


function activePlayerChanger() {
    if (activePlayer === 0) {
        document.querySelector('#player-0-panel').classList.toggle('active');
        document.querySelector('#player-1-panel').classList.toggle('active');
        document.querySelector('.active-svg-0').classList.add('display');
        document.querySelector('.active-svg-1').classList.remove('display');
        activePlayer = 1;
    } else {
        document.querySelector('#player-1-panel').classList.toggle('active');
        document.querySelector('#player-0-panel').classList.toggle('active');
        document.querySelector('.active-svg-0').classList.remove('display');
        document.querySelector('.active-svg-1').classList.add('display');
        activePlayer = 0;
    }
}

/*****************************/
//HOLD DICE

document.querySelector('#hold-dice-btn').addEventListener('click', function(){
    if(gamePlaying) {
        diceImgOne.style.display = 'none';
        diceImgTwo.style.display = 'none';
        scores[activePlayer] += roundScore;
        roundScore = 0;
    if(scores[activePlayer] >= winPoints.value) {
        gamePlaying = false;
        document.querySelector('#player-' + activePlayer + '-name').textContent = 'WINNER!';
        document.querySelector('#player-' + activePlayer + '-name').classList.add('winner');
        document.querySelector('#global-score-' + activePlayer).textContent = scores[activePlayer];
    } else {
    document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
    document.querySelector('#global-score-' + activePlayer).textContent = scores[activePlayer];
    activePlayerChanger()
    }
} else {

}
})


/***************************/
//NEW GAME BUTTON

document.querySelector('#new-game-btn').addEventListener('click', newGame);

function newGame() {
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
winPoints.value = '100';
gamePlaying = true;

diceImgOne.style.display = 'none';
diceImgTwo.style.display = 'none';

document.querySelector('#current-score-0').textContent = roundScore;
document.querySelector('#current-score-0').textContent = roundScore;

document.querySelector('#global-score-0').textContent = scores[0];
document.querySelector('#global-score-1').textContent = scores[1];

document.querySelector('#player-0-name').classList.remove('winner');
document.querySelector('#player-1-name').classList.remove('winner');

document.querySelector('#player-0-panel').classList.remove('active');
document.querySelector('#player-1-panel').classList.remove('active');
document.querySelector('#player-0-panel').classList.add('active');

document.querySelector('.active-svg-0').classList.remove('display');
document.querySelector('.active-svg-1').classList.remove('display');
document.querySelector('.active-svg-1').classList.add('display');


document.querySelector('#player-0-name').classList.remove('winner');
document.querySelector('#player-1-name').classList.remove('winner');

document.querySelector('#player-0-name').textContent = nameZeroInp.value;
document.querySelector('#player-1-name').textContent = nameOneInp.value;
}

function start(){
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

diceImgOne.style.display = 'none';
diceImgTwo.style.display = 'none';

document.querySelector('#player-0-panel').classList.add('active');

document.querySelector('.active-svg-0').classList.remove('display');

}

