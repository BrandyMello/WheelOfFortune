// import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';
import domUpdates from './domUpdates';

class Round {
  constructor(data, playersList, currentPuzzle, currentPlayer, game) {
    this.data = data;
    this.players = playersList;  
    this.puzzle = currentPuzzle;
    this.currentPlayer = currentPlayer;
    this.currentRoundWheel = this.makeNewWheel();
    this.wheelPrize;
    this.matchingLetters;
    this.lettersRemaining = []
    this.game = game;
  }

  makeNewWheel() {
    let wheel = new Wheel(this.data);
    return wheel.generateCurrentWheel();
  }

  spinWheel(value) {
    if (value === "BANKRUPT" || value === "LOSE A TURN") {
      this.findNextPlayer();
    } else {
      this.wheelPrize = value;
    }
  }

  checkPlayerGuess(guess) {
      let puzzleAnswer = this.puzzle['correct_answer'];
      this.lettersRemaining = puzzleAnswer.toUpperCase().split('')
        if (this.lettersRemaining.includes(guess)) {
          domUpdates.appendLetter(guess)
          this.updateScore()
        } 
        this.findNextPlayer();
  }


  findNextPlayer() {
    if (this.players.length === 3) {
      switch (this.currentPlayer) {
        case this.players[0]:
          this.currentPlayer = this.players[1]
          domUpdates.appendNextPlayerName(this.players[1].name)
          break;
        case this.players[1]:
          this.currentPlayer = this.players[2]
          domUpdates.appendNextPlayerName(this.players[2].name)
          break;
        case this.players[2]:
          this.currentPlayer = this.players[0]
          domUpdates.appendNextPlayerName(this.players[0].name)
          break;
        default:
          return;
      }
    }
}

  updateScore() {
    let winnings = this.currentPlayer.roundScore += this.wheelPrize
    domUpdates.appendScore(this.players, this.currentPlayer)
  }

}

export default Round;
