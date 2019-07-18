import chai from 'chai';
import Turn from '../src/Turn'
import Player from '../src/Player';
import Round from '../src/Round';
import Game from '../src/Game';
import Puzzle from '../src/Puzzle';

const expect = chai.expect;

describe('Turn', function () {
    let player;
    let round;
    let turn;
    let game;
    let puzzle;

    beforeEach(function () {
        player = new Player('Julian')
        game = new Game('Julian', 'Lacy', 'Brandy')
        round = new Round(game)
        turn = new Turn(round, 'Julian');
        puzzle = new Puzzle()
     
        it('should be a function', () => {
            expect(Turn).to.be.a('function');
        });

        it('should instantiate an new instance of Turn', () => {
            expect(turn).to.be.an.instanceOf(Turn);
        });

        // it('should be able to spin a wheel', () => {
        // expect(turn.spinWheel())
        // chai.spy.on
    })

    it('should separate the correct answer into individual letters', function () {
        expect(turn.findRemainingLetters('beepers')).to.eql(['b', 'e', 'e', 'p', 'e', 'r', 's'])
    })

    it('should check to see if a guess is included in the puzzle', () => {
        expect(turn.checkPlayerGuess('b', 600)).to.eql(false)
    });

    it('should be able to check to see if a player can afford a vowel', () => {
        expect(turn.canPlayerAffordVowel()).to.be.eql(false);
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
