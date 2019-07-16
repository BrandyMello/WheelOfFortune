import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import data from '../src/data';
import Player from '../src/Player';
import Round from '../src/Round';


const expect = chai.expect;
chai.use(spies);

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

   it('should have four rounds, and 4 rounds make up a game', () => {
    game.startGame()
    expect(game.roundCounter).to.equal(1)
    game.startNewRound()
    expect(game.roundCounter).to.equal(2)
    game.startNewRound()
    game.startNewRound()
    expect(game.roundCounter).to.equal(4)
  });


  describe('addPlayer', () => {
    it('should have three players at the start of the game', function () {
      game.addPlayers()
      expect(game.players.length).to.equal(3);
    });
  });
 
  describe('startNewRound', () => {
    it('should start a new round if the it is not the the 4th round', () => {
    expect(game.startNewRound()).to.eql(new Round(game))
    });
  });
});

  describe('puzzleSlayer', () => {
    it('should return the winner of all of the rounds', () => {
      expect(game.puzzleSlayer().to.be.an('object'))
    });
    it('should start the bonus round', () => {
      expect(game.puzzleSlayer().to.eql(new BonusRound('object')))
    });
  });




  //  describe('startGame', () => {
  //   it('should initialize the game with the three new players', () => {
  //     chai.spy.on(game,['startGame'], () => {});
  //     game.startGame()
  //     expect(game.addPlayers).to.have.been.called(1);
  //   })
  // })

  //startGame will be a spy to test that this.addPlayers() has been called.

