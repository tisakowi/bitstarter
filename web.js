var buf = new Buffer(16);
buf = fs.readFileSync("index.html");
mesg = buf.toString();


var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(mesg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


