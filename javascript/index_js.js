
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

  doBlast('h3','character');
  doBlast('p','word');
  doBlast('.main','character');


});


function doBlast(element,division){
  //using blast for headings
  $(element).blast({
    delimiter: division
  });
  $(element).on('mouseenter', '.blast', animationChanges);
}

function animationChanges(){
  // Store the targeted `.blast` element as an instanced variable
  var $target = $(this);
  // Add the animation classes to it
  $target.addClass('animated bounce');
  // Run the `removeClass` function on our instanced variable after
  // 1 sec (animation length of `.bounce`)
  setTimeout(function(){
    $target.removeClass('animated bounce');
  }, 1000);
}