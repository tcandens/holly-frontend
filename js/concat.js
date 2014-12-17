console.log("Imported!");

// Lazy Loading By Class
// Collect Items with class
$lazyLoads = $('.lazy-load');
// Show / Fade-in elements onLoad
$( window ).on('load', function(){
  $('body').addClass('lazy-load__done');
});

// Hamburger Toggles Navigation
$('.hamburger').on('click', function() {
  $(this).toggleClass('hamburger-active');
  $('.nav-overlay').toggleClass('nav-active');
});

// Adjective Swapper
var adjectiveList = [
  ["Problem Solver", "a"],
  ["Harry Potter Fan", "a"],
  ["Graphic Designer", "a"],
  ["Asshole", "an"]
];

var $shuffleScope = $('.shuffle-scope');
var $button = $shuffleScope.find('.shuffle-button');
var $adjective = $shuffleScope.find('.adjective');
var $article = $shuffleScope.find('.article');

var shuffle = function() {
  $button.attr("src", "img/googly-eye.gif");
  var index = adjectiveList.length;
  var rand = Math.floor(Math.random() * index );
  console.log(rand);

  var newAdj = adjectiveList[rand][0];
  var newArt = adjectiveList[rand][1];

  $adjective.text(newAdj);
  $article.text(newArt);
};

$button.on('click', shuffle);