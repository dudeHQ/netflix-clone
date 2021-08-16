$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    lazyLoad: true,
    stagePadding: 100,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 2
        },
        700: {
            items: 5
        },
        1000: {
            items: 8
        }
    }
})