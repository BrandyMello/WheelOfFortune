class Turn {
  constructor() {
    this.player = null;
    this.round = null;
  }

  spinWheel() {
    //wheel.findWheelPrize()
  }

  checkWheel(){
    //checkTurn()
  }

  checkVowel(){
    //checkTurn()
  }

  checkConsonant(){
    //checkTurn()
  }

  checkAnswer(){
    //checkTurn()
  }

  checkTurn() {
    //switchPlayer() if
  }

  switchPlayer() {

  }
}

export default Turn;

//  ** Spin Wheel **
 // When the player spins the wheel the Wheel class will run the findWheelPrize method to randomly make a selection from within the wheel array.
 // The selection will be stored as a property on the Wheel class as the value of the corresponding index.
 // A method will be invoked to determine if the player has landed on bankrupt or lose a turn. If they have, then the turn property that determines if 
 // the player has a valid turn will turn to false and their turn will end.
 // If the selection is a number then the turn property will be assigned to true.
 // There is a method in the Player class that will validate if it is still the players turn.
 // If the turn property is assigned to false, then the Game class will run a method to switch to the next player in the players array.
 // 
 // **Choose Consonant**
//  
// 
// 
// 
// 
// 