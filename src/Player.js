import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';

class Player {
  constructor(name) {
    this.name = name;
    this.roundScore = 0;
    this.grandTotal = 0;
    this.turn = true || false;
  }

  spinwheel() {
    //turn.checkWheel()
  }

  chooseConsonant() {
    //turn.checkConsonant();
  }

  buyVowel() {
    //turn.checkVowel();
  }

  solvePuzzle() {
    //turn.checkAnswer();
  }

  winGame() {
    // turn.switchPlayer();
  }
}

export default Player;
