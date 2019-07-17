import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
// import Player from '../src/Player';
import Round from '../src/Round';
import Wheel from '../src/Wheel';

const expect = chai.expect;

describe('Round', function() {
  let round;
  let game;


  beforeEach(function() {
    game = new Game();
    round = new Round(game);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should instantiate an new instance of Round', function () {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should create a puzzle bank', function () {
    expect(round.puzzleBank.length).to.eql(4);
  });

  it('should choose a puzzle from the puzzle bank', function() {
    expect(round.choosePuzzle()).to.be.an('object');
  });
});

