import data from './data';
import Player from './Player';
import Round from './Round';
// fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


class Game {
  constructor(p1, p2, p3) {
    this.data = data;
    this.players = [];
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.player3 = new Player(p3);
    this.roundCounter = 0;
    this.round;
    this.nextPlayer = players[0];
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
    let oneWrdPzl = data.puzzles.one_word_answers.puzzle_bank[randomNum];
    let twoWrdPzl = data.puzzles.two_word_answers.puzzle_bank[randomNum];
    let threeWrdPzl = data.puzzles.three_word_answers.puzzle_bank[randomNum];
    let fourWrdPzl = data.puzzles.four_word_answers.puzzle_bank[randomNum];
    this.puzzleBank.push(oneWrdPzl, twoWrdPzl, threeWrdPzl, fourWrdPzl);
    return this.puzzleBank;
  }

  choosePuzzle() {
    let bank = this.createPuzzleBank();
    this.currentPuzzle = bank[this.round -1];
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
