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
  
  checkPlayerGuess(guess) {
  let matchingLetters = this.lettersRemaining.find(letter => letter === guess)
  return this.lettersRemaining.filter(letter => letter !== matchingLetters);
}

//   canPlayerAffordVowel() {
//   if (this.potentialEarnings >=100) {
//    ////The player can not use the potential earning ie” wheelPrize because they have not “won” it yet. To buy a vowel they must spend from their player.roundScore///
//    this.canAffordVowel = true
//  }
}

export default Round;

