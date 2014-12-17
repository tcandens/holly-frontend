var $hamburger = $('.hamburger');

$('.waypoint_darken').waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
});

$('.waypoint_darken').next().waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
},{
  offset: function() {
    return $hamburger.height() * 1;
  }
})
