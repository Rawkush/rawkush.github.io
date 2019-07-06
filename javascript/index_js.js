
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
 
  //using blast for headings
  $('h3').blast({
    delimiter: 'character'
  });

  $('h3').on('mouseenter', '.blast', function(){

    // Store the targeted `.blast` element as an instanced variable
    var $target = $(this);

    // Add the animation classes to it
    $target.addClass('animated bounce');
    
    // Run the `removeClass` function on our instanced variable after
    // 1 sec (animation length of `.bounce`)
    setTimeout(function(){
      $target.removeClass('animated bounce');
    }, 1000);
  });


  //setting up blast for paragraphs
  $('p').blast({
    delimiter: 'word'
  });

  $('p').on('mouseenter', '.blast', function(){

    // Store the targeted `.blast` element as an instanced variable
    var $target = $(this);

    // Add the animation classes to it
    $target.addClass('animated bounce');
    
    // Run the `removeClass` function on our instanced variable after
    // 1 sec (animation length of `.bounce`)
    setTimeout(function(){
      $target.removeClass('animated bounce');
    }, 1000);
  });




});


//runs after all resources are loaded
$(window).on("load", function () {

  // hiding the loader
  $(".loader .inner").fadeOut(500, function () {
      $(".loader").fadeOut(750);
  });


});

