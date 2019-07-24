import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';
import dom from './domUpdates.js'

class Round {
  constructor(data, playersList, currentPuzzle, currentPlayer) {
    this.data = data;
    this.players = playersList;  
    this.puzzle = currentPuzzle;
    this.currentPlayer = currentPlayer;
    this.currentRoundWheel = this.makeNewWheel();
    this.wheelPrize;
    this.lettersRemaining;
  }

  findNextPlayer() {
   let playerIndex = this.players.indexOf(this.currentPlayer);
   if (playerIndex === 2) {
    this.currentPlayer = this.players[0]
   } else {
   this.currentPlayer = this.players[playerIndex + 1];
   }
   this.checkIfPlayerCanBuyVowel();
  }

  makeNewWheel() {
    let wheel = new Wheel(this.data);
    return wheel.generateCurrentWheel();
  } 
  
  chooseWheelPrize() {
    dom.enableConsonant()
    let randomIndex = Math.floor(Math.random() * Math.floor(6));
    let randomPrize = this.currentRoundWheel[randomIndex]
    this.wheelPrize = randomPrize;
    if (this.wheelPrize === "BANKRUPT") {
      this.takeBankruptMoney()
      dom.disableAlphabet();
      dom.emptyWheelPrize();
      this.findNextPlayer();
      dom.appendNextPlayerName(this.currentPlayer); 
    } else if (this.wheelPrize === "LOSE A TURN") {
      dom.disableAlphabet();
      dom.emptyWheelPrize();
      this.findNextPlayer();
      dom.appendNextPlayerName(this.currentPlayer); 
    }
  }

  checkPlayerGuess(guess, game) {
    let puzzleAnswer = this.puzzle['correct_answer'].toUpperCase().split('');
    let letterCounter = 0;
    this.lettersRemaining = puzzleAnswer.filter(letter => {
      if(letter !== guess) {
        return letter
      } else {
       letterCounter++
       }
       dom.appendLetter(letter);
      });
      if (puzzleAnswer.indexOf(guess) === -1) {
       this.findNextPlayer();
       dom.appendNextPlayerName(this.currentPlayer);
       dom.disableAlphabet();  
      };
      this.currentPlayer.roundScore += this.wheelPrize * letterCounter;
      dom.updateScore(this.currentPlayer, this.players);
      this.checkIfPlayerCanBuyVowel();
      return this.lettersRemaining;
    };

    checkIfPlayerCanBuyVowel() {
      if(this.currentPlayer.roundScore >= 100) {
        dom.enableAlphabet();
      }
    };

    checkSolveGuess(guess) {
      let puzzleAnswer = this.puzzle['correct_answer'].toUpperCase();
      let guessInCaps = guess.toUpperCase();
      if(guessInCaps === puzzleAnswer) {
        this.currentPlayer.grandTotal += this.currentPlayer.roundScore;
        dom.alertWin(this.currentPlayer.roundScore);
        dom.appendGrandTotal(this.currentPlayer, this.players);
      } 
      this.findNextPlayer();
      dom.appendNextPlayerName(this.currentPlayer);
    }

    takeVowelMoney() {
      this.currentPlayer.roundScore -= 100;
      dom.updateScore(this.currentPlayer, this.players);
    };

    takeBankruptMoney() {
      this.currentPlayer.roundScore = 0;
      dom.updateScore(this.currentPlayer, this.players);
    }  
}
  
export default Round;