'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller.js');


	app.route('/')
	.get(controller.getIndex);

	app.route('/addTransaction')
		.post(controller.addTransaction);
  
	app.route('/getAllTransaction')
  		.get(controller.getAllTrans);
  	
	app.route('/transaction/:transId')
    	.get(controller.get_a_trans)
    	.put(controller.update_a_trans)
    	.delete(controller.delete_a_trans);
    
	app.route('/getTransBySource/:source')
		.get(controller.getTransBySource);
	
	app.route('/getTransByTarget/:target')
		.get(controller.getTransByTarget);	
		
	app.route('/getTransByAmount/:amount')
		.get(controller.getTransByAmount);		
    };