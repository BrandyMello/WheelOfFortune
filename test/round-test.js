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
    round = new Round(game);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should instantiate an new instance of Round', function () {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should get the answer from the puzzle', function() {
    expect(round.getAnswer({
      category: 'The 90s',
      number_of_words: 1,
      total_number_of_letters: 10,
      first_word: 10,
      description: 'Puzzles pertaining to the decade in question.',
      correct_answer: 'Tamagotchi',
    })).to.eql(['T', 'a', 'm', 'a', 'g', 'o', 't', 'c', 'h', 'i'])
  });

  it('should remove the guess from the letters remaining', function() {
    round.getAnswer({
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10,
          description: 'Puzzles pertaining to the decade in question.',
          correct_answer: 'Tamagotchi',
        })
    expect(round.checkPlayerGuess('a')).to.eql(['T', 'm', 'g', 'o', 't', 'c', 'h', 'i'])
  });

  it('should evaluate if a player can afford a vowel', function() {
    
    expect(round.canPlayerAffordVowel()).to.eql(true)
  })
});

