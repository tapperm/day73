// console.log('helloworld');


const express = require('express')
const app = express()
const port = 1214

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var gsjson = require('google-spreadsheet-to-json');

gsjson({
        spreadsheetId: '16X19oHUdt6NPkytGrM6VMHqxBE8g6BfEvztNIv289Dk',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });

app.get('/json', (req, res) => {
    
    gsjson({
        spreadsheetId: '16X19oHUdt6NPkytGrM6VMHqxBE8g6BfEvztNIv289Dk',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
        res.send(result)
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });

})