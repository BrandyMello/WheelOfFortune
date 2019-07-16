import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';

class Player {
  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.grandTotal = 0;
  }
}

export default Player;
