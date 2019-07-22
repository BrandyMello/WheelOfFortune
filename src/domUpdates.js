import $ from 'jquery';
import {scaleLinear} from "d3-scale";



 const domUpdates = {

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
    $('.current-player-name').append(game.nextPlayer.name);
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
    $('.display-wheel-prize').append(game.round.wheelPrize);
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

  updateScore(player) {
    console.log(player);
  }
}
   
  export default domUpdates;
  function makeDomWheel(data, game) {


// var padding = {
//         top: 20,
//         right: 40,
//         bottom: 0,
//         left: 0
//     },
//     w = 550 - padding.left - padding.right,
//     h = 550 - padding.top - padding.bottom,
//     r = Math.min(w, h) / 2,
//     rotation = 0,
//     oldrotation = 0,
//     picked = 100000,
//     oldpick = [],
//     color = d3.scaleLinear().domain([1, 6])
//       .range(["#754CD0", "#F97267"])

// console.log("inside", data)
// var svg = d3.select('#chart')
//     .append("svg")
//     .data([data])
//     .attr("width", w + padding.left + padding.right)
//     .attr("height", h + padding.top + padding.bottom);
// var container = svg.append("g")
//     .attr("class", "chartholder")
//     .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
// var vis = container
//     .append("g");

// var pie = d3.layout.pie().sort(null).value(function (d) {
//     return 1;
// });
// // declare an arc generator function
// var arc = d3.svg.arc().outerRadius(r);
// // select paths, use arc generator to draw
// var arcs = vis.selectAll("g.slice")
//     .data(pie)
//     .enter()
//     .append("g")
//     .attr("class", "slice");

// arcs.append("path")
//     .attr("fill", function (d, i) {
//         return color(i);
//     })
//     .attr("d", function (d) {
//         return arc(d);
//     });
// // add the text
// arcs.append("text").attr("transform", function (d) {
//         d.innerRadius = 0;
//         d.outerRadius = r;
//         d.angle = (d.startAngle + d.endAngle) / 2;
//         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
//     })
//     .attr("text-anchor", "end")
//     .text(function (d, i) {
//         return data[i].label;
//     });
// container.on("click", spin);

// function spin(d) {

//     container.on("click", null);
//     //all slices have been seen, all done
//     console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//     if (oldpick.length == data.length) {
//         console.log("done");
//         container.on("click", null);
//         return;
//     }
//     var ps = 360 / data.length,
//         pieslice = Math.round(1440 / data.length),
//         game.round.chooseWheelPrize();
//         // rng = Math.floor((Math.random() * 1440) + 360);

//     rotation = (Math.round(rng / ps) * ps);

//     picked = Math.round(data.length - (rotation % 360) / ps);
//     picked = picked >= data.length ? (picked % data.length) : picked;
//     if (oldpick.indexOf(picked) !== -1) {
//         d3.select(this).call(spin);
//         return;
//     } else {
//         oldpick.push(picked);
//     }
//     rotation += 90 - Math.round(ps / 2);
//     vis.transition()
//         .duration(3000)
//         .attrTween("transform", rotTween)
//         .each("end", function () {
//             //mark question as seen
//             d3.select(".slice:nth-child(" + (picked + 1) + ") path")
//                 // .attr("fill", "yellow");
//             //populate question
//             d3.select("#question h1")
//                 .text(data[picked].question);
//             oldrotation = rotation;

            // /* Get the result value from object "data" */
            // console.log(data[picked].value);
            // // game.round.wheelPrize = data[picked].value;
            // console.log('Game.Round',game.round.wheelPrize)

//             /* Comment the below line for restrict spin to sngle time */
//             container.on("click", spin);
//         });
// }
// //make arrow
// svg.append("g")
//     .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
//     .append("path")
//     .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
//     .style({
//         "fill": "pink"
//     });
// //draw spin circle
// container.append("circle")
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .attr("r", 60)
//     .style({
//         "fill": "white",
//         "cursor": "pointer"
//     });
// //spin text
// container.append("text")
//     .attr("x", 0)
//     .attr("y", 15)
//     .attr("text-anchor", "middle")
//     .text("SPIN")
//     .style({
//         "font-weight": "bold",
//         "font-size": "30px"
//     });


// function rotTween(to) {
//     var i = d3.interpolate(oldrotation % 360, rotation);
//     return function (t) {
//         return "rotate(" + i(t) + ")";
//     };
// }


// function getRandomNumbers() {
//     var array = new Uint16Array(1000);
//     var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
//     if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
//         window.crypto.getRandomValues(array);
//         console.log("works");
//     } else {
//         //no support for crypto, get crappy random numbers
//         for (var i = 0; i < 1000; i++) {
//             array[i] = Math.floor(Math.random() * 100000) + 1;
//         }
//     }
//     return array;
//   }
}


 //category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results