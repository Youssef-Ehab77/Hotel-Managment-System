import Customer from "./Customer.js";

$(function () {
    let room = '';
    let startDate = '';
    let endDate = '';
    $('#header').load('Navbar.html');
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
        room = 'VIP';
    });
    let c = new Customer(getCookie('username'), 'abc@gmail', getCookie('password'));

    $('#book-now-btn').click(function () {
        startDate = new Date($('#start-date').val());
        endDate = new Date($('#end-date').val());
        let today = new Date();
        console.log(today)
        if (room !== '' && startDate !== '' && endDate !== '' && startDate >= today && endDate - startDate >= 86400) {
            let days = (endDate - startDate) / 86400000;
            swal("You Booked " + room + " room for " + days + " days\n" + "Booking will be confirmed Soon!!");
        } else {
            swal("Please Choose Room type and Correct Dates!!");
        }
    });
});




