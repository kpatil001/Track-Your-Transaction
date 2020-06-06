'use strict';
module.exports = function(app) {
  var transaction = require('../controller/controller.js');

  // transaction Routes
  
  app.route('/addTransaction')
  	.post(transaction.addTransaction)
  
  app.route('/getAllTransaction')
  	.get(transaction.getAllTrans)
  	
  	app.route('/transaction/:transId')
    .get(transaction.get_a_trans)
    .put(transaction.update_a_trans)
    .delete(transaction.delete_a_trans);
    
    };