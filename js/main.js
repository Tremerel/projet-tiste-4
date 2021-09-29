$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})

AOS.init({
    duration: 1200,
    once: true,
  });

  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare":1,
});