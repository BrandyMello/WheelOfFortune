
import $ from 'jquery';

import './css/base.scss';

import Game from './Game';

import dom from './domUpdates.js'


let game; 
let data;
   
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
 .then(response => response.json())
 .then(remoteData => data = remoteData.data)
 .catch(error => console.log(error));

$(document).ready(function() {
  $('.header').hide();
  $('.splash-intake').hide();
  $('.display-board').hide();
  $('.game-info').hide();
  $('fieldset').hide();
  $('.alphabet-container').hide();
  $('.player-container').hide();
  $('.div-wheel-prize-display').hide();
  $('.category').hide();
  $('.splash-welcome').delay(2500).fadeOut("slow");
  $('.splash-intake').append(`
    <form class ="initial-intake">
      <p> Player 1 : 
        <input class="player1-name splash-input" type="text" placeholder="Player One Name"> 
      </p>
      <p> Player 2 : 
        <input class="player2-name splash-input" type="text" placeholder="Player Two Name"> 
      </p>
      <p> Player 3 : 
        <input class="player3-name splash-input" type="text" placeholder="Player Three Name">
      </p>
      <button class="start-game-btn">START GAME</button>
      </form>`).delay(3000).fadeIn('slow');
  // domUpdates.disableUserInputButton();


$('.start-game-btn').click((e) => {
  e.preventDefault();
  let player1 = $('.player1-name').val();
  let player2 = $('.player2-name').val();
  let player3 = $('.player3-name').val();
  game = new Game(data, player1, player2, player3)
  game.startGame();
  $('.splash-intake').fadeOut();
  $('.header').fadeIn();
  $('.display-board').delay(1000).fadeIn();
   $('.category').delay(1000).fadeIn();
  $('.game-info').delay(1000).fadeIn();
  $('.fieldset').delay(1000).fadeIn();
  $('.alphabet-container').delay(1000).fadeIn();
  $('.player-container').delay(1000).fadeIn();
  $('.fieldset').delay(1000).fadeIn();
   $('.div-wheel-prize-display').delay(1000).fadeIn();
  dom.appendPlayers(game, player1, player2, player3);
  dom.appendPuzzle(game);
  dom.appendRoundNumber(game);
  dom.appendCategory(game);
  dom.appendCurrentPlayerName(game);
  dom.appendWheelPrizes(game);
  dom.reappearAlphabet();
  dom.disableAlphabet()
})

$(document).ready(function() {
  $('.spin-wheel-btn').on('click', function () {
    dom.showWheelPrize(game);
  });

  $('.alphabet').on('click', function(e) {
    e.preventDefault();
    let targetLetter = e.target;
    dom.disappearButton(targetLetter, game);
  });
});
});

