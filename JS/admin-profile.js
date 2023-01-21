var admins = JSON.parse(localStorage.getItem("admins"))

var thisusername = getCookie(username)

$("#change-btn").click(function(){
    for (var admin of admins)
        if (admin.username == thisusername)
        {
            admin.username =  $("#l-username").val()
            admin.password = $("#l-password").val()
        }
})

localStorage.setItem("admins", JSON.stringify(admins))
//change admin's password and username