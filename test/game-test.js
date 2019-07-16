import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
import Player from '../src/Player';
import Round from '../src/Round'

const expect = chai.expect;

let game;


describe('Game', () => {
  
  beforeEach(() => {
    game = new Game('Brandy','Lacy','Julian');
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate an new instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  describe('addPlayer', () => {
    it('should have three players at the start of the game', function () {
      game.addPlayers()
      expect(game.players.length).to.equal(3);
    });

  it('should have four rounds, and 4 rounds make up a game', () => {
    game.startGame()
    expect(game.roundCounter).to.eql(1)
    game.startNewRound()
    expect(game.roundCounter).to.eql(2)
    game.startNewRound()
    game.startNewRound()
    expect(game.roundCounter).to.eql(4)
//not sure if this is the best way to test this
  });
});

  // describe('startGame', () => {
  //   it('should initialize the game with the three new players', function () {
  //     expect(game.startGame()).to.eql([{p1},{p2},{p3}])
  //   })
  //   it('should create the puzzle data')

  // })
  //startGame is really a helper method that will help invoke other methods so curious if we will need to use a spy here
  describe('startNewRound', () => {
    it('should start a new round if the it is not the the 4th round', () => {
    expect(game.startNewRound()).to.equal(new Round(game))
    });
  });
});