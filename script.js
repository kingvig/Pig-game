'use strict';
// selecting elements
let currentScoreOfPlayer1 = document.querySelector('#current--0');
let currentScoreOfPlayer2 = document.querySelector('#current--1');
let scoreOfPlayer1 = document.querySelector('#score--0');
let scoreOfPlayer2 = document.querySelector('#score--1');
let btnRollDice = document.querySelector('.btn--roll');
let btnHoldDice = document.querySelector('.btn--hold');
const player1El= document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

let btnNewGame = document.querySelector('.btn--new');


let dice=document.querySelector('.dice');


scoreOfPlayer1.textContent=0;
scoreOfPlayer2.textContent=0;
dice.classList.add('hidden');

//initialise variables
let currentScoreOfPlayerValue = 0;
let currentScoreOfPlayer2Value = 0;
let finalScoreOfPlayer1 = 0;
let finalScoreOfPlayer2 = 0;
let activePlayer=0;

const switchPlayer=function(){
    activePlayer = activePlayer === 0 ? 1 : 0;

    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
}

const rollDice = () => {
     let randomNumber = Math.floor(Math.random() * 6) + 1;
     dice.classList.remove('hidden');
     dice.src=`dice-${randomNumber}.png`;
     if (randomNumber !==1){
       currentScoreOfPlayerValue = currentScoreOfPlayerValue + randomNumber;
     //currentScoreOfPlayer1.textContent = currentScoreOfPlayer1Value;
     document.getElementById(`current--${activePlayer}`).textContent = currentScoreOfPlayerValue;
    }
    else{
         document.getElementById(`current--${activePlayer}`).textContent =
           0;
           currentScoreOfPlayerValue = 0;
        switchPlayer();

    }

}
const holdScore = () => {
    if(activePlayer === 0){
    finalScoreOfPlayer1 = finalScoreOfPlayer1+currentScoreOfPlayerValue;
    scoreOfPlayer1.textContent = finalScoreOfPlayer1;
    currentScoreOfPlayerValue = 0;
    currentScoreOfPlayer1.textContent = currentScoreOfPlayerValue;
    switchPlayer();
    }
    else{
        finalScoreOfPlayer2 = finalScoreOfPlayer2 + currentScoreOfPlayerValue;
        scoreOfPlayer2.textContent = finalScoreOfPlayer2;
        currentScoreOfPlayerValue = 0;
        currentScoreOfPlayer2.textContent = currentScoreOfPlayerValue;
        switchPlayer();

    }
}
btnRollDice.addEventListener('click', rollDice);
btnHoldDice.addEventListener('click', holdScore);