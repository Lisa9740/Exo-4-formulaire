var express = require('express')
var app = express()
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/'+'formulaire.html');
})


app.post('/addition', function(req, res) {
  var nbr1 = req.body.nbr1; 
  var nbr2 = req.body.nbr2;
  var result = 0;
  result = parseInt(nbr1) + parseInt(nbr2);
  res.send(''+ result);


});





app.listen(3196, function () {
  console.log(__dirname)
  console.log('Example app listening on port 3096!')
})

