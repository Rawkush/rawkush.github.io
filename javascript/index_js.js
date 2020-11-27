//jquery after page loaded
$(function() {
  // jQuery methods go here...
    $("#slides").superslides({
        hashchange: false,
        play: 2000,
        animation: "fade",
        pagination: false
    });
// hiding the loader
$(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
        }
    });
  var typed = new Typed(".typed", {
    strings: ["Android Developer.", "Web Developer.", "Programmer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
  
});

//runs after all resources are loaded
$(document).ready(function() {


 // hiding the loader
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

  doBlast("h3", "character");
  doBlast("p", "word");
  doBlast("h2", "word");

  //doBlast(".main", "character");

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        938: {
            items: 4
        }
    }
});

var skillsTopOffset = $(".skillsSection").offset().top;
var statsTopOffset = $(".statsSection").offset().top;
var countUpFinished = false;
$(window).scroll(function () {

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#08fdd8',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


    }


    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
        $(".counter").each(function () {
            var element = $(this);
            var endVal = parseInt(element.text());

            element.countup(endVal);
        })

        countUpFinished = true;

    }


});


$("[data-fancybox]").fancybox();



$("#filters a").click(function () {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    return false;
});



$("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

});




const nav = $("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation() {

    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
    }
    else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }
}

});
