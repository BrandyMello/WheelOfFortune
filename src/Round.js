import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';

class Round {
  constructor(playersList, currentPuzzle) {
    this.players = playersList;  
    this.puzzle = currentPuzzle;
    this.turn = this.makeNewTurn();
    this.wheel = new Wheel();
    this.currentRoundWheel = this.wheel.generateCurrentWheel();
  }

  makeNewTurn(player) {
    // let playerIndex = this.game.players
    // if (this.playerIndex < this.game.players.length -1) {
    //   playerIndex ++;
    // } else {
    //   let playerIndex = 0;
    // }
    // return new Turn(this, this.game.players[playerIndex]);
  }
  

  

  
}

export default Round;


// At the beginning of the game the round number will be assigned to 1.
// 
// 
// 
// 
// 
// 
// 
// 