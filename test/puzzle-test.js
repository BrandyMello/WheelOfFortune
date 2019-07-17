import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
import Player from '../src/Player';
import Round from '../src/Round';
import Puzzle from '../src/Puzzle';

const expect = chai.expect;

describe('Puzzle', function() {
  let puzzle;
  let game;

  beforeEach(function() {
    game = new Game();
    puzzle = new Puzzle();
    });

      it('should be a function', () => {
    expect(Puzzle).to.be.a('function');
    expect(puzzle.category).to.eql('Around The House');//Play tests
  });
  
});