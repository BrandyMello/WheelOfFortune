import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';

class Round {
  constructor(playersList, currentPuzzle, currentPlayer) {
    this.players = playersList;  
    this.currentPlayer = currentPlayer;
    this.puzzle = currentPuzzle;
    this.turn = this.makeNewTurn();
    this.currentRoundWheel = this.makeNewWheel();
  }

  findNextPlayer(player) {
   if (player === players[0]) {
     return player = players[1];
   }
   if (player === players[1]) {
     return player = players[2];
   }
   if (player === players[2]) {
     return player = players[0];
   }
  }

  makeNewWheel() {
    let wheel = new Wheel();
    wheel.generateCurrentWheel();
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