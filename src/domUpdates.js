import $ from 'jquery';



 const domUpdates = {

 appendPlayers(game, p1, p2, p3) {
    $('.p1-name').append(p1);
    $('.p1-round-score-span').append(game.players[0].roundScore);
    $('.p1-grand-total').append(game.players[0].grandTotal);
    $('.p2-name').append(p2);
    $('.p2-round-score-span').append(game.players[1].roundScore);
    $('.p2-grand-total').append(game.players[1].grandTotal);
    $('.p3-name').append(p3);
    $('.p3-round-score-span').append(game.players[2].roundScore);
    $('.p3-grand-total').append(game.players[2].grandTotal)
  },

  appendRoundNumber(game) {
    $('.round').append(game.roundCounter);
  },

  appendCategory(game) {
    $('.category').append(game.currentPuzzle.category);
  },

  appendCurrentPlayerName(game) {
    $('.current-player-name').append(game.nextPlayer.name);
  },

  appendNextPlayerName(currentPlayer) {
    $('.current-player-name').empty();
    $('.current-player-name').append(currentPlayer.name);
  },

  appendPuzzle(game) {
    let puzzleAnswer = game.currentPuzzle.correct_answer.toUpperCase().split('');
    let displayPuzzleAnswer = puzzleAnswer.map((letter, index) => {
      if (letter !== " ") {
        $(`.letter-${index}`).html(puzzleAnswer[`${index}`]).addClass(`puzzle-display puzzle-display-${letter}`);
        console.log("letterinpuzzle", letter)
      }
    })
  }, 

  appendWheelPrizes(game) {
    let newWheel = game.round.currentRoundWheel;
    console.log("newWheel", newWheel)
    // makeDomWheel(newWheel, game);
  },

  showWheelPrize(game) {
    game.round.chooseWheelPrize();
    $('.display-wheel-prize').empty()
    $('.display-wheel-prize').append(game.round.wheelPrize);
  },

  emptyWheelPrize() {
    $('.display-wheel-prize').text('');
  },

  disappearButton(letter, game) {
    let guessedLetter = $(letter).text();
    console.log("targetLetter", guessedLetter)
    $(letter).closest('button')
      .css({
        'transition': 'transform 4s',
        'transform- style': 'preserve - 3d',
        'transform': 'rotateX(90deg)'
      }).fadeOut(1000);
      game.round.checkPlayerGuess(guessedLetter);
  },

  reappearAlphabet() {
    $('.alphabet').fadeIn(1000).css({
    'transition': 'transform 4s',
    'transform- style': 'preserve - 3d',
    'transform': 'rotateX(360deg)'
  })
  },

  appendLetter(approvedLetter) {
    $(`.puzzle-display-${approvedLetter}`).addClass(`puzzle-display puzzle-display-${approvedLetter} display-letter`).fadeIn(1000);
  },

  updateScore(player, playersList) {
    if(player.name === playersList[0].name){
      $('.p1-round-score-span').empty();
      $('.p1-round-score-span').append(player.roundScore);
    } else if(player.name === playersList[1].name) {
      $('.p2-round-score-span').empty();
      $('.p2-round-score-span').append(player.roundScore);
    } else if(player.name === playersList[2].name) {
      $('.p3-round-score-span').empty();
      $('.p3-round-score-span').append(player.roundScore);
    }
  },
 
  disableAlphabet() {
    $('.alphabet').attr("disabled", true);
  },

  enableAlphabet() {
    $('.alphabet').removeAttr("disabled");
  },

  disableConsonant() {
    $('.consonant').attr("disabled", true);
  },

  enableConsonant() {
    $('.consonant').removeAttr("disabled");
  },

  disableVowel() {
    $('.vowel').attr("disabled", true);
  },

  enableVowel() {
    $('.vowel').removeAttr("disabled");
  }

}   
  export default domUpdates;
