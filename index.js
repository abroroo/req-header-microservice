require('dotenv').config()
const express = require('express')
const app = express()
var ip = require('ip');

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/whoami', (req, res) => {
    let obj = {ipaddress: ip.address(), language: req.headers['accept-language'], software: req.headers['user-agent']}

    res.json(obj);
})


var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });