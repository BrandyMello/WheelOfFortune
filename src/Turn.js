import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';
import Wheel from './Wheel';
class Turn {
  constructor(round, player) {
    this.round = round;
    this.player = player;
    this.lettersRemaining = Puzzle.correctAnswer.split() || [];
    this.potentialEarnings = 0;
  }

  canPlayerAffordVowel() {
    Player.roundScore >= 100 ? this.checkPlayerGuess() : Round.makeNewTurn();
  }

  winRound() {
    game.startNewRound()
  }
}

export default Turn;
