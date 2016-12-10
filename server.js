var express = require('express');
var app = express();

app.use('/', express.static('public'))

app.listen(80, function () {
  console.log('Speck dev server listening on port 80!')
})