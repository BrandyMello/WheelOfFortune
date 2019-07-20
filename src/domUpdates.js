import $ from 'jquery';



export default {

 appendPlayers(game, p1, p2, p3) {
    $('.p1-name').append(p1);
    $('.p1-round-score').append(game.players[0].roundScore);
    $('.p1-grand-total').append(game.players[0].grandTotal);
    $('.p2-name').append(p2);
    $('.p2-round-score').append(game.players[1].roundScore);
    $('.p2-grand-total').append(game.players[1].grandTotal);
    $('.p3-name').append(p3);
    $('.p3-round-score').append(game.players[2].roundScore);
    $('.p3-grand-total').append(game.players[2].grandTotal)
  },

  appendRoundNumber(game) {
    $('.round').append(game.roundCounter);
  },

  appendCategory(game) {
    $('.category').append(game.currentPuzzle.category);
  },

  appendCurrentPlayerName(game) {
    console.log("playerArray", game.players)
    console.log("currentPlayer", game.nextPlayer)
    $('.current-player-name').append(game.nextPlayer);
  },

  appendPuzzle(game) {
    let puzzleAnswer = game.currentPuzzle.correct_answer.toUpperCase().split('');
    let displayPuzzleAnswer = puzzleAnswer.map((letter, index) => {
      if (letter !== " ") {
        $(`.letter-${index}`).html(puzzleAnswer[`${index}`]).addClass('puzzle-display');
      }
    });
    
  }

}
