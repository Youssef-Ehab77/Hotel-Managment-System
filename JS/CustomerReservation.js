$(function () {

    $('#header').load('Navbar.html');
    $('#footer').load('Footer.html');

    var requests = JSON.parse(localStorage.getItem("reservations"));
    var name = getCookie('username');
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    var availableRooms = JSON.parse(localStorage.getItem('availableRooms'));

    for (let request of requests) {
        let startDate = new Date(request.startDate);
        let endDate = new Date(request.endDate);
        let number_of_days = (endDate - startDate) / 86400000;
        if (request.customerUserName === name) {
            $('#customerReservations').append(
                '<div class="reservation container mb-5">' +
                '<div class="row mt-5">' +
                '<div class="m-auto col-6">' +
                '<p class="reservation-data">Room ' + request.roomId + ' for ' + number_of_days + ' days from ' + request.startDate.split('T')[0] + ' to ' + request.endDate.split('T')[0] + ' </p>' +
                '</div>' +
                '<div class="m-auto col-2">' +
                '<p class="fw-bold text-info-emphasis">Status : ' + request.Status + '</p>' +
                '</div>' +
                '<div class="m-auto col-1">' +
                '<button class="cancelRequest btn btn-danger">Remove</button>' +
                '</div>' +
                '</div>' +
                '</div>'
            )

        }
    }

    $('.cancelRequest').click(function () {
        var canceled_roomIdWhole = $(this).closest(".reservation").find(".reservation-data").text().split(" ")[1];
        var canceled_roomId = $(this).closest(".reservation").find(".reservation-data").text().split(" ")[1][0];

        for (let i in requests)
            if (requests[i].roomId == canceled_roomIdWhole) {
                if (requests[i].Status != "Canceled") {
                    if (canceled_roomId == '1')
                        availableRooms.single += 1;
                    else if (canceled_roomId == '2')
                        availableRooms.double += 1;
                    else availableRooms.vip += 1;

                    localStorage.setItem('availableRooms',  JSON.stringify(availableRooms));
                }
                requests.splice(i, 1);
                localStorage.setItem("reservations", JSON.stringify(requests));
                break;
            }

        for (let room of rooms)
            if (room.roomId == canceled_roomIdWhole) {
                room.status = "available";
                localStorage.setItem("rooms", JSON.stringify(rooms));
                break;
            }

        $(this).closest(".reservation").remove()
    });
});
