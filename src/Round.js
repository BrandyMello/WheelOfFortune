// import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';

class Round {
  constructor(data, playersList, currentPuzzle, currentPlayer) {
    this.data = data;
    console.log("data", this.data)
    this.players = playersList;  
    this.puzzle = currentPuzzle;
    this.currentPlayer = currentPlayer;
    this.currentRoundWheel = this.makeNewWheel();
    this.wheelPrize;
    this.matchingLetters;
    this.lettersRemaining = []
  }

  findNextPlayer() {
   let playerIndex = this.players.indexOf(this.currentPlayer);
   if (playerIndex === 2) {
    this.currentPlayer = this.players[0]
   } else {
   this.currentPlayer = this.players[playerIndex+1]
   }
  }

 spinWheel(value) {
   this.wheelPrize = value;
  console.log(this.wheelPrize)
  if (this.wheelPrize === "BANKRUPT" || "LOSE A TURN") {
  this.findNextPlayer();
  } 
 }

  makeNewWheel() {
    let wheel = new Wheel(this.data);
    return wheel.generateCurrentWheel();
  } 
  
  getAnswer(currentPuzzle) {
   this.lettersRemaining = currentPuzzle.correct_answer.split('')
   return this.lettersRemaining;
  }
  checkPlayerGuess(guess, game) {
      let puzzleAnswer = this.puzzle['correct_answer'];
      let letterCounter = 0;
      this.lettersRemaining = puzzleAnswer.toUpperCase().split('').filter(letter => {
        if (letter !== guess) {
          return letter
        } else {
          letterCounter++
          if (this.wheelPrize !== "BANKRUPT" || "LOSE A TURN") {
            this.currentPlayer.roundScore = this.wheelPrize * letterCounter;
          }
          domUpdates.appendLetter(letter);
          // domUpdates.updateScore(this.currentPlayer);
        }
      })
}
}

export default Round;
