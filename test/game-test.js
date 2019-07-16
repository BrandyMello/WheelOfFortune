import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
import Player from '../src/Player';

const expect = chai.expect;

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate an new instance of Game', function () {
    expect(game).to.be.an.instanceOf(Game);
  });

  describe('addPlayer', function () {
    it('should have three players at the start of the game', function () {
      let player1 = new Player('Brandy');
      let player2 = new Player('Lacy');
      let player3 = new Player('Julian');
      expect(game.addPlayers(player1, player2, player3).length).to.equal(3);
    });

  it('should have four rounds, and 4 rounds make up a game', function () {
    
  })

  // describe('startGame', function () {
  //   it('should initialize the game with the new players', function () {
  //     expect(game.StartGame())
  //   })
  // })
  });
});