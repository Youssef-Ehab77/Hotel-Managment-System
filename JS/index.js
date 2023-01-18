$(function () {

    $('#header').load('Navbar.html');
    $('#footer').load('Footer.html');

    setTimeout(function () {
        $('#book-now-btn').click(function () {
            window.location = 'Booking.html';
            console.log("Hello");
        });
    }, 300);


    const myCarouselElement = document.querySelector('#myCarousel')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 1000,
        touch: false
    });


});