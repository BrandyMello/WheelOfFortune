import data from './data';
import Player from './Player';
import Round from './Round';
import Game from './Game';
class Turn {
  constructor(player, round) {
    this.player = player;
    this.round = round;
  }


  spinWheel() {
    // **JUJU NOTES: this method will be attachd to an event listener, once the SPIN button is clicked, this function will fire
    // and it will fire wheel.chooseWheelPrize, I'm assuming checkCurrentPlayer will be a function that will 
    // validate the players abilities to continue playing or if they have lost their turn? 
    // wheel.chooseWheelPrize()
    // checkCurrentPlayer();
  }

  chooseConsonant() {
    //checkCurrentPlayer();
  }

  buyVowel() {
    //checkCurrentPlayer();
  }

  solvePuzzle() {
    //checkCurrentPlayer();
  }

  winRound() {
    //checkCurrentPlayer();
  }

  checkCurrentPlayer() { 
    // What is checkCurrentPlayer?
    //switch if necessary
  }
}

export default Turn;

//  ** Spin Wheel **
// When the player spins the wheel the Wheel class will run the *chooseWheelPrize method to randomly *consistency in naming*
// make a selection from within the wheel array.
// The selection will be stored as a property on the Wheel class as the value of the corresponding index.

// A method will be invoked to determine if the player has landed on bankrupt or lose a turn. If they have, 
// then the turn property that determines if the player has a valid turn will turn to false and their turn will end.
// If the selection is a number then the turn property will be assigned to true.
// There is a method in the Player class that will validate if it is still the players turn.
// If the turn property is assigned to false, then the Game class will run a method to switch to the next player in the players array.
// spinWheel will be called from the Turn class when a player clicks the spin button
// and that will really just call the findWheelPrize method inside of Wheel Class


// **JUJU NOTES
// Should we have a function that checks if the letter is correct? If yes +$$ to player.roundScore, else, -$$ from player.roundScore
// ex : checkPlayerGuess(letter) {
//        letter === letterInPuzzle ? +$ player.roundScore : -$ player.roundScore
//      }
// ^^^^ this works for consonants and vowels and is attached to every letter button 
// Maybe consider having a function that checks to see if a player can afford a vowel
// ex : on clicking buy a vowel button - a function that checks 
//      canPlayerAffordVowel() {
//      player.roundScore >= 100 ? enable vowel buttons : disable and throw up error sign
// }
