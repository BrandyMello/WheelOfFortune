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
    console.log(game.currentPuzzle);
  }

  // appendPuzzle(game) {
  //   console.log(game.choosePuzzle(game.data));
  // }

}
