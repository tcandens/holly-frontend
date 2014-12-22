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
    $article = $shuffleScope.find('.article');
    $articleAn = $shuffleScope.find('.article-an');

var shuffle = function() {
  $button.attr("src", "img/googly-eye.gif");
  if ( $articleAn.hasClass('article-an_on') ) {
    $articleAn.removeClass('article-an_on').addClass('article-an_shiftdown');
    var timeout05 = setTimeout(function() {
      $articleAn.removeClass('article-an_shiftdown');
    }, 200);
  };

  var rand = Math.floor(Math.random() * adjectiveList.length );

  while ( rand == shuffleCounter ) {
    rand = Math.floor(Math.random() * adjectiveList.length );
  }
  var newAdj = adjectiveList[rand][0];

  if ( adjectiveList[rand][1] == "an" ) {
    var timeout03 = setTimeout(function() {
      $articleAn.addClass('article-an_on');
    }, 200);
  } else if ( adjectiveList[rand][1] == "a" ) {
    var timeout03 = setTimeout(function() {
      $articleAn.removeClass('article-an_on');
    }, 200);
  } else {
    console.log('Shit');
  }


  $adjective.addClass('adjective_fade');
  $article.addClass('article_fade');
  var timeout01 = setTimeout(function() {
    // Change Adjective
    $adjective.html( newAdj );
    // Switch position of adjective for illusion
    $adjective.removeClass('adjective_fade');
    $adjective.addClass('adjective_shiftup');
    // Article fade
    $article.removeClass('article_fade');
    $article.addClass('article_shiftup');
  }, 200);
  var timeout02 = setTimeout(function() {
    // Kill transforms for appearence of shifting back in from top
    $adjective.removeClass('adjective_shiftup');
    $article.removeClass('article_shiftup');
  }, 400);
  shuffleCounter = rand;

};

$button.on('click', shuffle);

var $hamburger = $('.hamburger');

$('.waypoint_darken').waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
}, {
  offset: function() {
    return $hamburger.height();
  }
});

$('.waypoint_darken').next().waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
},{
  offset: function() {
    return $hamburger.height() * 1;
  }
})
