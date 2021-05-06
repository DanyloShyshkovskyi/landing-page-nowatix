$(document).ready(function() {
    $(".containerInner").slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        dots: true,
        infinite: true,
        arrows: false,
    });
});

function Menu() {
    $(".navContent").toggleClass("height");
}