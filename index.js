const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
 
var routes = require('./app/routes/route.js'); 
  
port = process.env.PORT || 8001;
  
app.listen(port);

console.log('transcation system RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); 