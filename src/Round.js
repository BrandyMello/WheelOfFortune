// import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';
import domUpdates from './domUpdates';

class Round {
  constructor(data, playersList, currentPuzzle, currentPlayer, game) {
    this.data = data;
    console.log("data", this.data)
    this.players = playersList;  
    this.puzzle = currentPuzzle;
    this.currentPlayer = currentPlayer;
    this.currentRoundWheel = this.makeNewWheel();
    this.wheelPrize;
    this.matchingLetters;
    this.lettersRemaining = []
    this.game = game;
  }

  findNextPlayer(game) {
    if (this.players.length === 3) {
      switch (this.currentPlayer) {
        case this.players[0]:
          this.currentPlayer = this.players[1]
          domUpdates.appendNextPlayerName(this.players[1].name)
          break;
        case this.players[1]:
          this.currentPlayer = this.players[2]
          domUpdates.appendNextPlayerName(game.players[this.currentPlayer])
          break;
        case this.players[2]:
          this.currentPlayer = this.players[0]
          domUpdates.appendNextPlayerName(game.players[this.currentPlayer])
          break;
        default:
         return;
      }
  }
}

spinWheel(value) {
  this.wheelPrize = value;
  console.log(this.wheelPrize)
  if (this.wheelPrize === "BANKRUPT" || this.wheelPrize === "LOSE A TURN") {
    this.findNextPlayer(this.game);
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
      if (this.wheelPrize === "BANKRUPT" || "LOSE A TURN") {
        this.findNextPlayer(game);
      } else {
      this.lettersRemaining = puzzleAnswer.toUpperCase().split('').filter(letter => {
        if (letter !== guess) {
          return letter
        } 
          domUpdates.appendLetter(letter);
          // domUpdates.updateScore(this.currentPlayer);
        })
}
}
}

export default Round;
