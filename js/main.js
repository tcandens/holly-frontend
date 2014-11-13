$(function() {

  // Adjective Swapper
  var adjectiveList = [
    ["Problem Solver", "a"],
    ["Harry Potter Fan", "a"],
    ["Graphic Designer", "a"]
  ];

  var $shuffleScope = $('.shuffle-scope');
  var $button = $shuffleScope.find('.shuffle-button');
  var $adjective = $shuffleScope.find('.adjective');
  var $article = $shuffleScope.find('.article');

  var shuffle = function() {
    var index = adjectiveList.length;
    var rand = Math.floor(Math.random()) * index;

    var newAdj = adjectiveList[rand];
  }

});
