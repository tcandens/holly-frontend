var $hamburger = $('.hamburger');

$('.waypoint_darken').waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
});

$('.waypoint_darken').next().waypoint(function() {
  $hamburger.toggleClass('waypoint-action_darken');
})
