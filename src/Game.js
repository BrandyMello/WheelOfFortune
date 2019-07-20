import data from './data';
import Player from './Player';
import Round from './Round';
import dom from './domUpdates.js'


class Game {
  constructor(data,p1, p2, p3) {
    this.data = data;
    this.players = [];
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.player3 = new Player(p3);
    this.roundCounter = 0;
    this.round;
    this.nextPlayer = this.player1;
    console.log("inside o game", this.nextPlayer)
    this.puzzleBank = [];
    this.currentPuzzle;
    this.puzzleSlayer = null;
  }

  startGame() {
    this.addPlayers();
    this.createPuzzleBank();
    this.startNewRound();
  }

  addPlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players; 
  }

  startNewRound() {
    if(this.roundCounter === 4) {
       this.puzzleSlayer()
    } else {
      this.roundCounter ++;
      this.choosePuzzle();
      this.round = new Round(this.players, this.currentPuzzle, this.nextPlayer);
    }
  }

  createPuzzleBank() {
    let randomNum = Math.ceil(Math.random() * 23);
    let oneWrdPzl = this.data.puzzles.one_word_answers.puzzle_bank[randomNum];
    let twoWrdPzl = this.data.puzzles.two_word_answers.puzzle_bank[randomNum];
    let threeWrdPzl = this.data.puzzles.three_word_answers.puzzle_bank[randomNum];
    let fourWrdPzl = this.data.puzzles.four_word_answers.puzzle_bank[randomNum];
    this.puzzleBank.push(oneWrdPzl, twoWrdPzl, threeWrdPzl, fourWrdPzl);
    return this.puzzleBank;
  }

  choosePuzzle() {
    this.currentPuzzle = this.puzzleBank[this.roundCounter -1];
    return this.currentPuzzle;
  }

  endRound() {
    this.currentPlayer = this.round.findCurrentPlayer(this.nextPlayer)
  }

  puzzleSlayer() {
    var organize = players.sort((a,b) => {
       return b.grandTotal - a.grandTotal
    })
    return organize[0]
    }
};
  

export default Game;
