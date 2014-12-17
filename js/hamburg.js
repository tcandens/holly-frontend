var $hamburger = $('.hamburger');

$('.waypoint_darken').waypoint(function(direction) {
  $hamburger.toggleClass('waypoint-action_darken', direction === 'down' );
});
$('.waypoint_darken').waypoint(function(direction) {
  $hamburger.toggleClass('waypoint-action_darken', direction === 'up' );
}, {
  offset: function() {
    return -$(this).height;
  }
});

// $('.waypoint_lighten').waypoint(function(direction) {
//   $hamburger.toggleClass('waypoint-action_darken', direction === 'down' );
// });
// $('.waypoint_lighten').waypoint(function(direction) {
//   $hamburger.toggleClass('waypoint-action_darken', direction === 'up' );
// }, {
//   offset: function() {
//     return -$(this).height;
//   }
// });
