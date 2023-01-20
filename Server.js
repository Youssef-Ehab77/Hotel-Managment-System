const express = require('express')
const fs = require('fs');
const app = express()
app.use(require('body-parser').urlencoded({ extended: false }));
const port = 3000
var daata ;
fs.readFile('Data/Reservation.json', function (err, data) {
    daata = JSON.parse(data);
    return;
});
app.get('/', (req, res) => {
    res.send(req.body)
})
app.post('/aa', (req, res) => {

    
    res.send(req.body)
})
app.get('/send', (req, res) => {
    res.send(req)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})