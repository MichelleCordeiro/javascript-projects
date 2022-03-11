$(document).ready(function () {
  var owl = $('.owl-one')
  owl.owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
})
