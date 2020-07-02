const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  
  var path = require("path");
 
var routes = require('./app/routes/route.js'); 

app.use('/static', express.static(path.join(process.cwd(),'/app/bundles/css')));  
app.use('/static', express.static(path.join(process.cwd(),'/app/bundles/fonts')));
app.use('/static', express.static(path.join(process.cwd(),'/app/bundles/js')));
app.use('/static', express.static(path.join(process.cwd(),'/app/bundles/images')));


port = process.env.PORT || 8001;

app.listen(port);

console.log('transcation system RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);