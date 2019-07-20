import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';

class Round {
  constructor(playersList, currentPuzzle, currentPlayer) {
    this.players = playersList;  
    this.currentPlayer = currentPlayer;
    this.puzzle = currentPuzzle;
    this.currentRoundWheel = this.makeNewWheel();
    this.potentialEarnings = 0;
    this.lettersRemaining = [];
    this.matchingLetters;
  }

  findNextPlayer(player) {
   if (player === players[0]) {
     return player = players[1];
   }
   if (player === players[1]) {
     return player = players[2];
   }
   if (player === players[2]) {
     return player = players[0];
   }
  }

  makeNewWheel() {
    let wheel = new Wheel();
    wheel.generateCurrentWheel();
    this.getAnswer()

  } 
  
spinwheel() {
  wheel.chooseWheelPrize();
  if (wheel.chooseWheelPrize() === 'BANKRUPT' || 'LOSE A TURN') {
    this.findNextPlayer()
  } else {
    this.checkPlayerGuess()
  }
}

getAnswer(currentPuzzle) {
  this.lettersRemaining = currentPuzzle.correct_answer.split('')
  return this.lettersRemaining
}

checkPlayerGuess(guess) {
  let matchingLetters = this.lettersRemaining.find(letter => letter === guess)
  return this.lettersRemaining.filter(letter => letter !== matchingLetters)
}
}

export default Round;