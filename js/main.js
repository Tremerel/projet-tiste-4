$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})

var clientView = document.documentElement.clientWidth

if(clientView > 768){
    AOS.init({
        duration: 1200,
        once: true,
    });
} else if (clientView < 768) {
    AOS.init({
        disable: true,
    });
}


 VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare":1,
});