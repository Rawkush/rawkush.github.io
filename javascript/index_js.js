
//jqueryh after page loaded
$(function(){
  // jQuery methods go here...
  $('#slides').superslides({
    hashchange: true,
    play: 2000,
});


var typed = new Typed(".typed", {
  strings: ["Android Developer.", "Web Developer.", "Student."],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  showCursor: false
});


});
