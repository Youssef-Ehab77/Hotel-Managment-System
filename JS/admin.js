$(function () {
    
    let currentRoom = '';
    $('#header').load('NavbarAdmin.html');
    $('#footer').load('Footer.html');

    var roomTypes = JSON.parse(localStorage.getItem("roomTypes"))

    for (var roomtype of roomTypes)
    {
        $(".textEdit").after('<div class="card m-3" style="max-width: 540px;">' +
        '<div class="row g-0">' +
            '<div class="col-md-6">' +
                '<img src="../Images/' + roomtype.type + '.jpg" class="img-fluid rounded-start" alt="...">' +
            '</div>' +
            '<div class="col-md-6">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + roomtype.type +  ' Room</h5>' +
                    '<p class="description-text" class="card-text">' + roomtype.description + '</p>' +
                    '<p class="card-text"><small class="text-muted">' + roomtype.price + '$ per Night</small></p>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>')
    }


    $('#card1').click(function () {
        $('#card1').css({
            'border': '2px solid red'
        });
        $('#card2').css({
            'border': '1px solid #c0c3c3'
        });
        $('#card3').css({
            'border': '1px solid #c0c3c3'
        });
        currentRoom = 'single';
    });
    $('#card2').click(function () {
        $('#card2').css({
            'border': '2px solid red'
        });
        $('#card1').css({
            'border': '1px solid #c0c3c3'
        });
        $('#card3').css({
            'border': '1px solid #c0c3c3'
        });
        currentRoom = 'double';
    });
    $('#card3').click(function () {
        $('#card3').css({
            'border': '2px solid red'
        });
        $('#card2').css({
            'border': '1px solid #c0c3c3'
        });
        $('#card1').css({
            'border': '1px solid #c0c3c3'
        });
        currentRoom = 'vip';
    });

    setTimeout(function (){
    $('.card').click(function () {
        $('.removable').remove();
        $(this).closest(".card").after('<div class="removable"><div class="editDetails"><label>Price</label><input id="price"></input><label>Description</label><input id="description"></input></div><button id="submit">Submit Edit</button></div>');
    });
}, 100)

//change details
$(document).on('click', '#submit', function () {
    var priceValue = $('#price').val()
    $(this).parents('.removable').prev('.card').find('.text-muted').text(priceValue + "$ per Night");
    var descriptionValue = $('#description').val()
    $(this).parents('.removable').prev('.card').find('.description-text').text(descriptionValue)
});


var rooms = JSON.parse(localStorage.getItem("rooms"))

// check availability
//loop over rooms, and check if there is available rooms of this type
//else, print not available
$('#end-date').change(function (){
    $('#availabilityText').remove();
    var flag = 0;
    for (var room of rooms)
        if (room.type == currentRoom && room.status == 'available')
        {
            $('#end-date').after('<br><br><div id="availabilityText">There is available ' + currentRoom + ' rooms</div>');
            flag = 1;
            break;
        }
    if (flag == 0)
        $('#end-date').after('<br><br><div id="availabilityText">There is no available ' + currentRoom + ' rooms</div>')

    

})

    
    


    // $('#edit').click(function () {
    //     $('#edit').css('height', '95%')
    //     //$(".empty-text").css('white-space', 'nowrap');
    // });

});



