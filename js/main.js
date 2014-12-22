// Cut some mustard
$('html').toggleClass('no-js').addClass('js-ready');

// Lazy Loading By Class
// Collect Items with class
$lazyLoads = $('.lazy-load');
// Show / Fade-in elements onLoad
// $('body').addClass('lazy-load__done');
$( window ).on('load', function(){
  $('body').addClass('lazy-load__done');
});

// Hamburger Toggles Navigation
$('.hamburger').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger-active');
  $('.nav-overlay').toggleClass('nav-active');
  $('html').toggleClass('nav-active_scroll-freeze');
});

// Adjective Swapper
var adjectiveList = [
  ["Problem Solver", "a"],
  ["Harry Potter Fan", "a"],
  ["Graphic Designer", "a"],
  ["Asshole", "an"]
];
var shuffleCounter = 0;

var $shuffleScope = $('.shuffle-scope'),
    $button = $shuffleScope.find('.shuffle-button'),
    $adjective = $shuffleScope.find('.adjective'),
    $article = $shuffleScope.find('.article-an');

var shuffle = function() {
  $button.attr("src", "img/googly-eye.gif");
  var rand = Math.floor(Math.random() * adjectiveList.length );

  while ( rand == shuffleCounter ) {
    rand = Math.floor(Math.random() * adjectiveList.length );
    console.log('rand redo');
  }

  console.log('old: ' + shuffleCounter);
  console.log('new: ' + rand);
  var newAdj = adjectiveList[rand][0];

  if ( adjectiveList[rand][1] == "an" ) {
    $article.addClass('article-an_on');
  } else if ( adjectiveList[rand][1] == "a" ) {
    $article.removeClass('article-an_on');
  } else {
    console.log('Shit');
  }

  $adjective.text(newAdj);
  shuffleCounter = rand;

};

$button.on('click', shuffle);
