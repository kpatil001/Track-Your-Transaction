'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller.js');
  // controller Routes

	app.route('/addcontroller')
		.post(controller.addTransaction);
  
	app.route('/getAllcontroller')
  		.get(controller.getAllTrans);
  	
	app.route('/controller/:transId')
    	.get(controller.get_a_trans)
    	.put(controller.update_a_trans)
    	.delete(controller.delete_a_trans);
    
	app.route('/getTransBySource/:source')
		.get(controller.getTransBySource);
    };