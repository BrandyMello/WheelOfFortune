import data from './data';
import Player from './Player';
import Round from './Round';

class Game {
  constructor() {
    this.data = data;
    this.round = 0;
    this.players = [];

  }

  addPlayers(p1, p2, p3) {
    let player1 = new Player(p1);
    let player2 = new Player(p2);
    let player3 = new Player(p3);
    this.players.push(player1, player2, player3);
    return this.players;
  }

  startGame(p1, p2, p3) {
    this.addPlayers(p1, p2, p3);
    let round = new Round(data);
  }

  determineWinner() {
    //player.winGame()
    //generate a bonus Wheel and start a bonus round
  }
}

export default Game;

// **Start Game**
// When the game starts, there will be 3 inputs for the players names. When and only when all 3 inputs are populated with valid values
// the button that runs the method that starts the game will be enabled and the button will trigger the start of the game.
// When the game starts, the players names will be passed to the Player class into an array and a new Round is instantiated.
// 
// **Add Players**
// The property that is an array of players will be populated with the values of those inputs and each player will be instantiated.
// 
// **Creating A Puzzle Bank**
// A method will reassign the property on Game class, which at default will be an empty array, to be an array of 1 1word puzzle, 1 2word puzzle, 1 3word puzzle, 
// and 1 4word puzzle. 
// 
// **Selecting A Puzzle**
// A new puzzle is instantiated by passing though the puzzle bank. Based on the round, a puzzle will be selected with the corresponding index
// (ex: Round 1 = 1word puzzle). The selected puzzles properties will be passed to the Puzzle class. 
// 
// 