// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Game from './Game';

import dom from './domUpdates.js'


let game; 
let data;
   
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
 .then(response => response.json())
 .then(remoteData => data = remoteData.data)
 .catch(error => console.log(error));

$('.startGameBtn').click((e) => {
  e.preventDefault();
  let player1 = $('.player1-name').val();
  let player2 = $('.player2-name').val();
  let player3 = $('.player3-name').val();
  game = new Game(data, player1, player2, player3)
  game.startGame();
  dom.appendPlayers(game, player1, player2, player3);
  dom.appendPuzzle(game);
  dom.appendRoundNumber(game);
  dom.appendCategory(game);
  dom.appendCurrentPlayerName(game);
  dom.appendWheelPrizes(game);
  dom.reappearAlphabet();
})

$(document).ready(function() {
  $('.spin-wheel-btn').on('click', function () {
    dom.showWheelPrize(game);
  });

  $('.alphabet').on('click', function(e) {
  dom.disappearButton(e, game);
  });
});

