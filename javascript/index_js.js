
//jquery after page loaded
$(function(){
  // jQuery methods go here...
  $('#slides').superslides({
    hashchange: true,
    play: 2000,
    animation: 'fade'
  });


  var typed = new Typed(".typed", {
    strings: ["Android Developer.", "Web Developer.", "Programmer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });


  createChart();



});


//runs after all resources are loaded
$(window).on("load", function () {

  // hiding the loader
  $(".loader .inner").fadeOut(500, function () {
      $(".loader").fadeOut(750);
  });

  doBlast('h3','character');
  doBlast('p','word');
  doBlast('.main','character');


});


function createChart(){
  $('.chart').easyPieChart({
    easing: 'easeInOut',
    barColor: '#08fdd8',
    trackColor: false,
    scaleColor: false,
    lineWidth: 10,
    size: 152,
    onStep: function (from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    }
  });
}