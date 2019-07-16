import chai from 'chai';
import Turn from '../src/Turn'

const expect = chai.expect;

describe('Turn', function() {
    let turn;

    beforeEach(function () {
        turn = new Turn();
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should instantiate an new instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should be able to choose a consonant', () => {
        expect(turn.chooseConsonant()).to.be.a('function');
    });

    it('should be able to buy a vowel', () => {
        expect(turn.buyVowel()).to.be.a('function');
    });

    it('should be able to solve the puzzle', () => {
        expect(turn.solvePuzzle()).to.be.a('function');
    });

    it('should be able to win a round', () => {
        expect(turn.winRound()).to.be.a('function');
    });

    it('should be able to check who the current player is', () => {
        expect(turn.checkCurrentPlayer()).to.be.a('function');
    });
});

