$(function () {
    
    let room = '';
    $('#header').load('NavbarAdmin.html');
    $('#footer').load('Footer.html');

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
        room = 'single';
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
        room = 'double';
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
        room = 'vip';
    });

    setTimeout(function (){
    $('.card').click(function () {
        $('.removable').remove();
        $(this).closest(".card").after('<div class="removable"><div class="editDetails"><label>Price</label><input id="price"></input><label>Description</label><input id="description"></input></div><button id="submit">Submit Edit</button></div>');
    });
}, 100)

$(document).on('click', '#submit', function () {
    var priceValue = $('#price').val()
    $(this).parents('.removable').prev('.card').find('.text-muted').text(priceValue + "$ per Night");
    var descriptionValue = $('#description').val()
    $(this).parents('.removable').prev('.card').find('.description-text').text(descriptionValue)


});


$('#end-date').change(function (){
    if (room == 'double')
        $('#end-date').after('<br><br><div>There is no available ' + room + ' rooms</div>')
    else if (room != '')
        $('#end-date').after('<br><br><div>There is available ' + room + ' rooms</div>')
})





    // $('#edit').click(function () {
    //     $('#edit').css('height', '95%')
    //     //$(".empty-text").css('white-space', 'nowrap');
    // });

});



