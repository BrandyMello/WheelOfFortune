// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import Game from './Game';

import domUpdates from './domUpdates.js'


let game; 
let data;
let startButton = $('.startGameBtn');
startButton.prop('disabled', false)

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
 .then(response => response.json())
 .then(remoteData => data = remoteData.data)
 .catch(error => console.log(error));

startButton.click((e) => {
  e.preventDefault();
  let player1 = $('.player1-name').val();
  let player2 = $('.player2-name').val();
  let player3 = $('.player3-name').val();
  game = new Game(data, player1, player2, player3)
  game.startGame();
  domUpdates.appendPlayers(game, player1, player2, player3);
  domUpdates.appendPuzzle(game);
  domUpdates.appendRoundNumber(game);
  domUpdates.appendCategory(game);
  domUpdates.appendCurrentPlayerName(game);
  domUpdates.appendWheelPrizes(game);
  domUpdates.reappearAlphabet();
  consonantButtons(game);
  vowelButtons(game);
})

$(document).ready(function () {

});
 

let consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
let vowels = ['A', 'E', 'I', 'O', 'U']
const consonantDiv = $('.consonant-div')
const vowelDiv = $('.vowel-div')

function consonantButtons(game) {
  startButton.prop('disabled', true)
  consonants.forEach(letter => {
      var button = $('<button/>', {
        text: letter,
        class: "alphabet",
        id: `alphabet-${letter}__js`,
        click: function () {
          game.round.checkPlayerGuess(letter);
        }
      });
      consonantDiv.append(button);
  })
}

function vowelButtons(game) {
  vowels.forEach(letter => {
      var button = $('<button/>', {
        text: letter,
        class: "alphabet",
        id: `alphabet-${letter}__js`,
        click: function () {
          game.round.checkPlayerGuess(letter);
        }
      });
      vowelDiv.append(button);
  })

   $('.alphabet').click((e) => {
     e.preventDefault();
     let targetLetter = e.target;
     domUpdates.disappearButton(targetLetter, game);
   });
}


console.log('This is the JavaScript entry file - your code begins here.');
