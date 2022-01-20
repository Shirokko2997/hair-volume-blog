$(".post-carousel").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});

$(".js-side-menu-toggle").click(function () {
  $("body").toggleClass("offcanvas-menu");
});
