import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
import Round from '../src/Round';
import Wheel from '../src/Wheel';

const expect = chai.expect;

describe('Round', function() {
  let round;
  let game;


  beforeEach(function() {
    game = new Game();
    game.startGame()
    round = new Round(game.players, game.currentPuzzle, game.nextPlayer);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should instantiate an new instance of Round', function () {
    expect(round).to.be.an.instanceOf(Round);
  });

 
});

