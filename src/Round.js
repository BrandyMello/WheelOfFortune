import data from './data';
import Player from './Player';
import Game from './Game';
import Wheel from './Wheel';

class Round {
  constructor(game) {
    this.game = game;
    this.round = this.game.roundCounter;
    this.puzzleBank = [];
    this.puzzle = this.choosePuzzle();
    this.turn = this.makeNewTurn();
    this.wheel = new Wheel();
    this.currentRoundWheel = this.wheel.generateCurrentWheel()
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