$(function () {

    $('#header').load('NavbarAdmin.html');
    $('#footer').load('Footer.html');

});

const requests = JSON.parse(localStorage.getItem("reservations"))

console.log(requests)

for (request of requests)
{
    var number_of_days = request.endDate.split("-")[0] - request.startDate.split("-")[0];
    
    $("#header").after(
    '<div class="request" class="container">' +
    '<div class="row mt-5">' +
        '<div class="m-auto col-6">' +
            '<p class="reservation">Room ' +  request.roomId + ' for ' + number_of_days + ' days, from ' + request.startDate + ' to ' + request.endDate + ' </p>' +
        '</div>' +
        '<div class="m-auto col-1">' +
            '<button class="confirmRequest btn btn-info">Confirm</button>' +
        '</div>' +
        '<div class="m-auto col-1">' +
            '<button class="cancelRequest btn btn-danger">Cancel</button>' +
        '</div>' +
   '</div>' +
'</div>')
}

var rooms = JSON.parse(localStorage.getItem("rooms"))

var availableRooms = JSON.parse(localStorage.getItem("availableRooms"))

$('.cancelRequest').click(function(){
    var canceled_roomIdWhole = $(this).closest(".request").find(".reservation").text().split(" ")[1];
    var canceled_roomId = $(this).closest(".request").find(".reservation").text().split(" ")[1][0];

    if (canceled_roomId == '1')
        availableRooms.single += 1;

    else if (canceled_roomId == '2')
        availableRooms.double += 1;

    else
        availableRooms.vip += 1;

    localStorage.setItem("availableRooms", availableRooms)

    $(this).closest(".request").remove()

    for (request of requests)
        if (request.roomId == canceled_roomIdWhole)
        {
            request.Status = "Canceled"
            localStorage.setItem("reservations", JSON.stringify(requests))
            break;
        }

        for (room of rooms)
            if (room.roomId == canceled_roomIdWhole)
            {
                console.log("hello")
                room.status = "available"
                localStorage.setItem("rooms", JSON.stringify(rooms))
                break;
            }

})


$('.confirmRequest').click(function(){
    var confirmed_roomIdWhole = $(this).closest(".request").find(".reservation").text().split(" ")[1];

    for (request of requests)
        if (request.roomId == confirmed_roomIdWhole)
        {
            request.Status = "Confirmed"
            localStorage.setItem("reservations", JSON.stringify(requests))
            break;
        }
    $(this).closest(".request").remove()
})