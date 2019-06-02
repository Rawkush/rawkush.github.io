var slideIndex=0
showSlide(slideIndex)

function showSlide(n){
    var i;
    var slides= document.getElementsByClassName("slide-data")
    var dots= document.getElementsByClassName("dot")

    if (n>slides.length-1){
        slideIndex=1
    }

    if(n<0){
        slideIndex=slides.length-1
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }

    for(i=0;i<dots.length;i++){
        dots.className=dots[i].className.replace("active","");
    }

    slides[slideIndex].style.display="block";
    dots[slideIndex].className += " active";


}


function plusSlides(n) {
    showSlides(slideIndex+=n);
}


