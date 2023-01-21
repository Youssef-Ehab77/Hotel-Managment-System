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


function addDummyData() {
    localStorage.setItem('Reseav',JSON.stringify(Reservation))
    localStorage.setItem('Reseav',JSON.stringify(Reservation))

}
function AddRes(data) {
    var oldData= JSON.parse(localStorage.getItem('Reseav'));
    oldData.push()
    localStorage.setItem('Reseav',JSON.stringify(oldData))   
}
function Delete(id) {
    var oldData= JSON.parse(localStorage.getItem('Reseav'));
    for (const iterator of object) {
        array
    }
}