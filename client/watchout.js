// start slingin' some d3 here.

var options = {
  'width': 800,
  'height': 500,
  'enemyCount': 20
};

var stats = {
  'currentScore': 0,
  'highScore': 0,
  'collisionCount': 0
};

var axes = {
  'x': d3.scale.linear().domain([0, 100]).range([0, options.width]),
  'y': d3.scale.linear().domain([0, 100]).range([0, options.height])
};

var board = d3.select('#gameboard').append('svg').attr('width', options.width).attr('height', options.height);

// create player object
var player = {
  var position = {
    x: 0,
    y: 0
  };

  // changing player object position based on drag input

}
// create Enemy class
var Enemy = function(position) {
  this.position = position;

  // consider shape property

  // random movement within board

}

Enemy.prototype.move = function() {
  // update this.position with a random pair of coords
  this.position = randomCoordinateGenerator();
}

function randomCoordinateGenerator() {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  //return two random coordinates (on the board area)
  return {x: x, y: y};
}



// collision detection
  // detect when a player collides with an enemy
  // list coordinates that define the area of each enemy
  // set an object up with player area coordinates
    // check (at some interval) if player coords and enemy coords are equal
      // if collision then update score object
// update score based on either: 1) JS ticks, or 2) explore d3
// in some way measure time
  // possible d3 ticks at any interval (1/10th sec 1/1000th sec)
    // every tick: check for collisions
    // every tick: update score (if needed)

    // every tick: use d3.timer(xMilliSec, cb) to call the transition function(takes a cb [randomMove]) to animate
    // use the transition function with tween to call collision detection function

// maybe use General Update pattern style to generate enemies and append to DOM (game board?)





// ****** Cool ideas ******
// having an enemy that moves towards the player (using .force, .gravity)
// point threshold tiers?
// implement difficulty tiers (e.g., hard mode, nightmare mode) that can be toggled on/off?
  // change enemy to somethng else for each level (whirling shuriken)
  // create a unique enemy for nightmare mode (the enemy that gravitates toward player?); "boss"
// reverse the game objective so instead of avoiding enemies, player tries to catch enemies, implement points multiplier?