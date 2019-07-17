class Turn {
  constructor(round, player) {
    this.player = player;
    this.round = round;
  }


  spinwheel() {
    //wheel.findWheelPrize()
    // if incorrect switch player to next player in index with round.makeNewTurn(player) and reassign this.player;
  }

  chooseConsonant() {
    // if incorrect switch player to next player in index with round.makeNewTurn() and reassign this.player;
  }

  buyVowel() {
    // if incorrect switch player to next player in index with round.makeNewTurn() and reassign this.player;
  }

  solvePuzzle() {
    // if incorrect switch player to next player in index with round.makeNewTurn() and reassign this.player;
  }

  winRound() {
    // if incorrect switch player to next player in index with round.makeNewTurn() and reassign this.player;
  }
}

export default Turn;

//  ** Spin Wheel **
 // When the player spins the wheel the Wheel class will run the findWheelPrize method to randomly make a selection from within the wheel array.
 // The selection will be stored as a property on the Wheel class as the value of the corresponding index.


 // A method will be invoked to determine if the player has landed on bankrupt or lose a turn. If they have, then the turn property (that determines if 
 // the player has a valid turn will turn to false and their turn will end.
 // If the selection is a number then the turn property will be assigned to true.
 // There is a method in the Player class that will validate if it is still the players turn.
 // If the turn property is assigned to false, then the Game class will run a method to switch to the next player in the players array.
 // 
 // **Choose Consonant**
//  
// 
// 

// spinWheel will be called from the Turn class when a player clicks the spin button
//and that will really just call the findWheelPrize method inside of Wheel Class


// 