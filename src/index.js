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
 let game = new Game();
 game.startGame('player1', 'player2', 'player3');
});

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
    alphabet.append(consonantAppend);
}
function vowelButtons() {
    var vowelAppend = vowels.map(letter => {
        $("<button/>"), {
            text: letter,
            click: function () {},
        }
    })
    alphabet.append(vowelAppend);
}