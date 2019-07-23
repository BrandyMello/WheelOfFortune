// import data from './data';
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
    // this.turn = this.makeNewTurn();
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
   console.log('Player switch', this.currentPlayer);
  }

 // spinWheel() {
 //  this.chooseWheelPrize();
 //  console.log("YoWheelPrize", this.wheelPrize)
  
 // }

  makeNewWheel() {
    let wheel = new Wheel(this.data);
    return wheel.generateCurrentWheel();
  } 
  
  chooseWheelPrize() {
    let randomIndex = Math.floor(Math.random() * Math.floor(6));
    let randomPrize = this.currentRoundWheel[randomIndex]
    this.wheelPrize = randomPrize;
    if (this.wheelPrize === "BANKRUPT" || this.wheelPrize === "LOSE A TURN") {
      this.findNextPlayer();
      dom.appendNextPlayerName(this.currentPlayer); 
      // dom.disableAlphabet()
    }
  }

  checkPlayerGuess(guess, game) {
    let puzzleAnswer = this.puzzle['correct_answer'];
    let letterCounter = 0;
    this.lettersRemaining = puzzleAnswer.toUpperCase().split('').filter(letter => {
      if(letter !== guess) {
        return letter
      } else {
       letterCounter++
       }
       dom.appendLetter(letter);
       
       console.log("letterCounter", letterCounter)
  
      })
      this.currentPlayer.roundScore += this.wheelPrize * letterCounter;
      dom.updateScore(this.currentPlayer, this.players);
      return this.lettersRemaining
    };

    //I think there is a loop happening here because it appears to me that the lettersRemaining is being reassigned to the entire puzzle answer everytime this method is called. 
  
  
}
  // let matchingLetters = this.puzzle.find(letter => letter === guess)
  // return this.lettersRemaining.filter(letter => letter !== matchingLetters);


     // findNextPlayer(player) {
  //  if (player === players[0]) {
  //    return player = players[1];
  //  }
  //  if (player === players[1]) {
  //    return player = players[2];
  //  }
  //  if (player === players[2]) {
  //    return player = players[0];
  //  }
  // }





// //class Round {
//  constructor(playersList, currentPuzzle, currentPlayer) {
 //   this.players = playersList;
 //   this.currentPlayer = currentPlayer;
 //   this.puzzle = currentPuzzle;
 //   this.currentRoundWheel = this.makeNewWheel();
 //   this.potentialEarnings = 0;
 //   this.lettersRemaining = [];
 //   this.matchingLetters;
 //   this.canAffordVowel = false;
 // }

// findNextPlayer(player) {
//  if (player === players[0]) {
//    return player = players[1]
//  }
//  if (player === players[1]) {
//    return player = players[2]
//  }
//  if (player === players[2]) {
//    return player = players[0]
//  }
// }

// makeNewWheel() {
//  let wheel = new Wheel();
//  wheel.generateCurrentWheel();
//  this.getAnswer();
// }

// spinwheel() {
//  wheel.chooseWheelPrize();
//  if (wheel.chooseWheelPrize() === ‘BANKRUPT’ || ‘LOSE A TURN’) {
//    this.findNextPlayer();
//  } else {
//    this.checkPlayerGuess();
//  }
// }

// getAnswer(currentPuzzle) {
//  this.lettersRemaining = currentPuzzle.correct_answer.split(‘’)
//  return this.lettersRemaining;
// }

// checkPlayerGuess(guess) {
//  let matchingLetters = this.lettersRemaining.find(letter => letter === guess)
//  return this.lettersRemaining.filter(letter => letter !== matchingLetters);
// }

// canPlayerAffordVowel() {
//  if (this.potentialEarnings >=100) {
//    ////The player can not use the potential earning ie” wheelPrize because they have not “won” it yet. To buy a vowel they must spend from their player.roundScore///
//    this.canAffordVowel = true
//  }
// }

// }``

  



export default Round;


// At the beginning of the game the round number will be assigned to 1.
// 
//  let puzzleAnswer = this.puzzle['correct_answer'];
    // let letterCounter = 0;
    // let filterRemainingLetters;
    // filterRemainingLetters = puzzleAnswer.toUpperCase().split('').filter(letter => {
    //   if(letter !== guess) {
    //     return letter
    //   } else {
    //    letterCounter++
    //    this.lettersRemaining.push(letter)
    //    // if(this.wheelPrize !== "BANKRUPT" || "LOSE A TURN") {
    //    }
    //onto somthing here but too tired. need to look at it fresh. 
// 
// 
// 
// 
// 
// 