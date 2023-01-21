$(function () {
    var customers = JSON.parse(localStorage.getItem("customers"))

    var thisusername = getCookie("username");
    $('#header').load('Navbar.html');
    $('#footer').load('Footer.html');
    $("#change-btn").click(function () {
        for (var user of customers)
            if (user.username == thisusername) {
                user.username = $("#l-username").val()
                user.password = $("#l-password").val()
            }
    });

    localStorage.setItem("customers", JSON.stringify(customers));
});

