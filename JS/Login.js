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
        let username = $('#l-username').get(0).value;
        let password = $('#l-password').get(0).value;

        if (username.length >= 4 && password.length >= 4 && getCookie('username') === username && getCookie('password') === password) {
            // let date = new Date();
            // date.setMonth(date.getMonth() + 1)
            // setCookie('Rooms', Rooms, date);
            document.location.href = '../HTML/index.html';
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
})
