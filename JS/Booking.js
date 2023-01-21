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
        room = 'vip';
    });

    $('#book-now-btn').click(function () {
        startDate = new Date($('#start-date').val());
        endDate = new Date($('#end-date').val());
        let today = new Date();
        let availability = JSON.parse(localStorage.getItem('availableRooms'));

        if (room !== '' && startDate !== '' && endDate !== '' && startDate >= today - 86400000 && endDate - startDate >= 86400) {
            if (availability[room] > 0) {
                let days = (endDate - startDate) / 86400000;
                swal("You Booked " + room + " room for " + days + " days\n" + "Booking will be confirmed Soon!!");
                let oldRooms = JSON.parse(localStorage.getItem('rooms'));
                let oldReservations = JSON.parse(localStorage.getItem('reservations'));
                let roomID, price;
                for (let i = 0; i < oldRooms.length; i++) {
                    if (oldRooms[i].type === room && oldRooms[i].status === 'available') {
                        oldRooms[i].status = 'unavailable';
                        roomID = oldRooms[i].roomId;
                        price = oldRooms[i].price;
                        break;
                    }
                }
                availability[room] -= 1;

                let newReservation = {
                    "id": Math.floor(Math.random() * 9999) + 1,
                    "roomId": roomID,
                    "customerUserName": getCookie('username'),
                    "startDate": startDate,
                    "endDate": endDate,
                    "Status": "pending",
                    'PricePerDay': price
                };
                oldReservations.push(newReservation);
                localStorage.setItem('rooms', JSON.stringify(oldRooms));
                localStorage.setItem('availableRooms', JSON.stringify(availability));
                localStorage.setItem('reservations', JSON.stringify(oldReservations));
            } else {
                swal("Sorry\n There is no Available " + room + " Rooms At this Moment!");
            }
        } else {
            swal("Please Choose Room type and Correct Dates!!");
        }
    });
});



