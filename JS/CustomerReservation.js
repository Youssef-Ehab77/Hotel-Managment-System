$(function () {

    $('#header').load('Navbar.html');
    $('#footer').load('Footer.html');
    const requests = JSON.parse(localStorage.getItem("reservations"));
    const name = getCookie('username');
    for (let request of requests) {
        let startDate = new Date(request.startDate);
        let endDate = new Date(request.endDate);
        let number_of_days = (endDate-startDate) / 86400000;
        if (request.customerUserName === name) {
            $('#customerReservations').append(
                '<div class="container mb-5">' +
                '<div class="row mt-5">' +
                '<div class="m-auto col-6">' +
                '<p id="reservation">Room ' + request.roomId + ' for ' + number_of_days + ' days from ' + request.startDate.split('T')[0] + ' to ' + request.endDate.split('T')[0] + ' </p>' +
                '</div>' +
                '<div class="m-auto col-1">' +
                '<button class="btn btn-danger">Cancel</button>' +
                '</div>' +
                '</div>' +
                '</div>'
            )

        }
    }

});
