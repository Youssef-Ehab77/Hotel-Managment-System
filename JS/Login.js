$(function () {
    $("#registration-page").load('../HTML/Registration.html');
    $('#footer').load('../HTML/Footer.html');

    $(document).mouseup(function (p) {
        let register = $('.register-container');
        if (!register.is(p.target) && !register.has(p.target).length) {
            register.hide();
            $('.login-container').css('filter', 'blur(0)');
        }
    });

    $('#sign-up').click(function () {
        $('.register-container').show().slideDown();
        $('.login-container').css('filter', 'blur(3px)')
        // let newWindow = open("../HTML/Registration.html", "", "left=" + 500 + ",top=" + 100 + ",width=600,height=600");
    });


    $('#login-btn').click(function () {
        let l_Username = $('#l-username').get(0).value;
        let l_Password = $('#l-password').get(0).value;

        //&& getCookie('username') === username && getCookie('password') === password
        if (l_Username.length >= 3 && l_Password.length >= 4) {
            let customers = JSON.parse(localStorage.getItem('customers'));
            let found = false;
            for (let customer of customers) {
                if (customer.username === l_Username && customer.password === l_Password) {
                    setCookie('username', l_Username);
                    found = true;
                    break;
                }
            }
            if (!found)
                swal("Wrong Username or Password!");
            else document.location.href = '../HTML/CustomerHomePage.html';
        } else {
            // alert('Wrong Username or Password!');
            swal("Wrong Username or Password!");
        }
    });
});

//* handle when click on sing-up from home-page
$(function () {
    var isSignUp = location.hash.substring(1);
    if (isSignUp === 'sign-up') {
        $('.login-container').css('filter', 'blur(3px)');
        setTimeout(function () {
            $('.register-container').show().slideDown();
        }, 500);
    }
});

var addDummyData = function () {
    localStorage.setItem('customers', JSON.stringify(Customers));
    localStorage.setItem('reservations', JSON.stringify(Reservations));
    localStorage.setItem('rooms', JSON.stringify(Rooms));
    localStorage.setItem('availableRooms', JSON.stringify(AvailableRooms));
}