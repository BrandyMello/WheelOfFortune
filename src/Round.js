import data from './data';
import Player from './Player';
import Game from './Game';

class Round {
  constructor(game) {
    this.game = game;
    this.round = this.game.roundCounter;
    this.puzzleBank = [];
    this.puzzle = this.choosePuzzle();
    this.turn = this.makeNewTurn();
    // this.wheel = new Wheel();
  }

  makeNewTurn() {
    //conditionals - how to loop through an array and back again
    //return new Turn(this, this.game.players[++])
  }

  createPuzzleBank() {
    let randomNum = Math.ceil(Math.random() * 23);
    let puzlBank = [data.puzzles.one_word_answers.puzzle_bank[randomNum]];
    let twoWrdPzl = data.puzzles.two_word_answers.puzzle_bank[randomNum];
    let threeWrdPzl = data.puzzles.three_word_answers.puzzle_bank[randomNum];
    let fourWrdPzl = data.puzzles.four_word_answers.puzzle_bank[randomNum];
    puzlBank.push(twoWrdPzl, threeWrdPzl, fourWrdPzl)
    return puzlBank;
  }

  choosePuzzle() {
    this.createPuzzleBank();
    return this.puzzleBank[this.round -1];
    // console.log(this.round -1)
    //has to be called in turn at the end of a turn???
    //needs to be an instantiated instance of puzzle/save the return to variable and pass through instantiation
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