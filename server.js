// console.log('helloworld');

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