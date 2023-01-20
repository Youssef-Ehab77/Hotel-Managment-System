import Customer from "./Customer.js";
$(function () {
    let room = '';
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
        room = 'vip';
    });
    let c = new Customer('youssef', 'abc@gmail',12332,12);
    console.log(c.Data());
});




