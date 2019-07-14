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

  startGame() {
    let round = new Round(data);
  }


}

export default Game;