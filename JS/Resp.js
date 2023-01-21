$(function () {
    var items = JSON.parse(localStorage.getItem('res'))
    for (const item of items) {
        // console.log(item);
        $('#CardGroup').append(
            CreateCard(
                item['id'],
                item['PreicePerDay'],
                item['customerUserName'],
                item['startDate'],
                item['endDate']));
    }
});
function createDD() {
    localStorage.setItem('res', JSON.stringify(Reservation));
}
function CreateCard(res_id, roomprice,customerUserName, start_date, end_date) {
    console.log(res_id, roomprice);
    var card = $('<div>').attr('id', 'res' + res_id).addClass('card col-lg-3 col-md-4 col-sm-5 m-5 border border-5 rounded rounded-4 shadow-lg p-2 border-secondary');
    var cardBody = $('<div>').addClass('card-body');
    var cardTitle = $('<h5>').addClass('card-title').text('Reservation No ' + res_id);
    var cardText1 = $('<p>').addClass('card-text');
    var cardText2 = $('<p>').addClass('card-text');
    var start_dateE = $('<small>').addClass('text-muted').text(start_date);
    var end_dateE = $('<small>').addClass('text-muted').text(end_date);

    var start_dateO = new Date(start_date)
    var end_dateO = new Date(end_date)
    console.log(start_dateO);
    var diff = end_dateO.getTime() - start_dateO.getTime();
    var daydiff = Math.round( diff / (1000 * 60 * 60 * 24));
    cardText1.html(
        `Customer Name : ${customerUserName}<br>` +
        `Number of Days : ${daydiff}<br>` +
        `Price of 1 night : ${roomprice}<br>` +
        `Total Price : ${roomprice * daydiff}`);
    start_dateE.text("Checkin Date : "+start_dateO.toLocaleDateString());
    end_dateE.text("Checkout Date : "+end_dateO.toLocaleDateString());
    cardText2.append(start_dateE);
    cardText2.append($('<br>'));
    cardText2.append(end_dateE);
    cardBody.append(cardTitle);
    cardBody.append(cardText1);
    cardBody.append(cardText2);
    card.append(cardBody)
    var print_btn = $('<button>').click(function (e) {
        e.preventDefault();
        print_btn.hide()
        var newWin = window.open('', '', 'height=650, width=650');
        newWin.document.write(card.html());
        newWin.document.close();
        newWin.print();
        print_btn.show()

    }).addClass('btn btn-dark').text("Print");

    card.append(print_btn);
    return card;
}