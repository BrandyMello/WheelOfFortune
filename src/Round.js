import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';
import Turn from './Turn';

class Round {
  constructor(game) {
    this.game = game;
    this.round = this.game.roundCounter;
    this.puzzleBank = [];
    this.puzzle = this.choosePuzzle();
    this.turn = this.makeNewTurn();
    // this.wheel = new Wheel();
  }

  makeNewTurn(player) {
    const turn = new Turn();
    // console.log(this.game.player1);
    if (turn.player === game.player1) {
      turn.player = game.player2;
    }
    if (turn.player === game.player2) {
      turn.player = game.player3;
    }
    if (turn.player === game.player3) {
      turn.player = game.player1;
    }
  }
  

  createPuzzleBank() {
    let randomNum = Math.ceil(Math.random() * 23);
    let oneWrdPzl = data.puzzles.one_word_answers.puzzle_bank[randomNum];
    let twoWrdPzl = data.puzzles.two_word_answers.puzzle_bank[randomNum];
    let threeWrdPzl = data.puzzles.three_word_answers.puzzle_bank[randomNum];
    let fourWrdPzl = data.puzzles.four_word_answers.puzzle_bank[randomNum];
    this.puzzleBank.push(oneWrdPzl, twoWrdPzl, threeWrdPzl, fourWrdPzl);
    return this.puzzleBank;
  }

  choosePuzzle() {
    let bank = this.createPuzzleBank();
    return bank[this.round -1];
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