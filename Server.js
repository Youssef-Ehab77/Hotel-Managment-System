const express = require('express')
const fs = require('fs');
const app = express()
app.use(require('body-parser').urlencoded({ extended: false }));
const port = 3000
var Reservation = [] ;
var Rooms = [];
fs.readFile('Data/Reservation.json', function (err, data) {
    Reservation = JSON.parse(data);
    return;
});
fs.readFile('Data/Rooms.json', function (err, data) {
    Rooms = JSON.parse(data);
    return;
});
app.get('/rooms', (req, res) => {
    
    res.send(Rooms)
})
app.post('/rooms', (req, res) => {
    res.send(req.body['start'])
    Rooms.push(req.body);
    fs.writeFile('Data/Rooms.json' ,Rooms );
})
app.post('/reserv', (req, res) => {
    res.send(req.body['start'])
    Rooms.push(req.body);
    fs.writeFile('Data/Rooms.json' ,Rooms );
})
app.get('/send', (req, res) => {
    res.send(req)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})