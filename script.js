let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

//Counter_Up
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});




$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:false,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})



let toTop = document.querySelector('.totop');

window.addEventListener('scroll',farhan)

function farhan(){
    if(window.pageYOffset > 80){
        toTop.classList.add('active')
    }
    else{
        toTop.classList.remove('active')
    }
}