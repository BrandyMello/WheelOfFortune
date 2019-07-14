import data from './data';
import Player from './Player';
import Round from './Round';

class Game {
  constructor() {
    this.data = data;
    this.round = 0;
    this.players = [];
  }

  startGame() {
    let player1 = new Player(1, 'Brandy');
    let player2 = new Player(2, 'Lacy');
    let player3 = new Player(3, 'Julian');
    let round = new Round
  }


}