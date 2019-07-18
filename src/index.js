// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Game from './Game';


//On submit of names - start game button

$( document ).ready(() => {
});

let game; 


$('.startGameBtn').click((e) => {
  e.preventDefault();
  let player1 = $('.player1-name').val();
  let player2 = $('.player2-name').val();
  let player3 = $('.player3-name').val();
  game = new Game(player1, player2, player3);
  game.addPlayers();
  appendPlayers(player1, player2, player3);

})

function appendPlayers(p1, p2, p3) {
  $('.p1-name').append(p1);
  $('.p1-round-score').append(game.players[0].roundScore);
  $('.p1-grand-total').append(game.players[0].grandTotal);


  $('.p2-name').append(p2);
  $('.p2-round-score').append(game.players[1].roundScore);
  $('.p2-grand-total').append(game.players[1].grandTotal);

  $('.p3-name').append(p3);
  $('.p3-round-score').append(game.players[2].roundScore);
  $('.p3-grand-total').append(game.players[2].grandTotal)

}

console.log('This is the JavaScript entry file - your code begins here.');
// This is the base functionality for creating our alphabet buttons, as far as where 
// they will appear in our files, I thought this would be the best place to keep it for now.
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let vowels = ['a', 'e', 'i', 'o', 'u'] 
const alphabet = $(".alphabet")

function consonantButtons() {
    var consonantAppend = consonants.map(letter => {
       $("<button/>"), {
           text: letter, 
           click: function (){},
       }
    })
    alphabet.append(consonantAppend).trigger('create');
}

consonantButtons()
function vowelButtons() {
    var vowelAppend = vowels.map(letter => {
        $("<button/>"), {
            text: letter,
            click: function () {},
        }
    })
    alphabet.append(vowelAppend);
}
vowelButtons()