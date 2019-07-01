
//jqueryh after page loaded
$(function(){
  // jQuery methods go here...
  $('#slides').superslides({
    hashchange: true,
    play: 2000,
    animation: 'fade'
});


var typed = new Typed(".typed", {
  strings: ["Android Developer.", "Web Developer.", "Student."],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  showCursor: false
});


});


//runs after all resources are loaded
$(window).on("load", function () {

  // hiding the loader
  $(".loader .inner").fadeOut(500, function () {
      $(".loader").fadeOut(750);
  });


});
