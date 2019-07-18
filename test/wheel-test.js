import chai from 'chai';
import Game from '../src/Game';
import data from '../src/data';
import Round from '../src/Round';

const expect = chai.expect;

describe('Wheel', () => {
  let round;
  let game;

  beforeEach( () => {
    game = new Game();
    round = new Round(game);
  });

  it('should be a function', () => {
    expect(Wheel).to.be.a('function');
  });

  it('should instantiate an new instance of Wheel', () => {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });
});




