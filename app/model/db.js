'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root@0818',
    database : 'transaction'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;