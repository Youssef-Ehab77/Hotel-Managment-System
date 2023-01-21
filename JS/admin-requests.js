$(function () {

    $('#header').load('Navbar.html');
    $('#footer').load('Footer.html');

});

const requests = JSON.parse(localStorage.getItem("reservations"))

console.log(requests)

for (request of requests)
{
    var number_of_days = request.endDate.split("-")[0] - request.startDate.split("-")[0];
    
    $("#header").after(
    '<div id="request" class="container">' +
    '<div class="row mt-5">' +
        '<div class="m-auto col-6">' +
            '<p id="reservation">Room ' +  request.roomId + ' for ' + number_of_days + ' days, from ' + request.startDate + ' to ' + request.endDate + ' </p>' +
        '</div>' +
        '<div class="m-auto col-1">' +
            '<button id="confirmRequest" class="btn btn-info">Confirm</button>' +
        '</div>' +
        '<div class="m-auto col-1">' +
            '<button id="cancelRequest" class="btn btn-danger">Cancel</button>' +
        '</div>' +
   '</div>' +
'</div>')
}


$('#cancelRequest').click(function(){
    $(this).closest("#request").remove()
    for (room of AvailableRooms)
        

})

$('#confirmRequest').click(function(){
    $(this).closest("#request").remove()
})