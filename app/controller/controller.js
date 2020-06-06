'use strict';

var Transaction = require('../model/detailsModel.js');

exports.addTransaction = function(req,res) {
	var newTrans = new Transaction(req.body);
	
	console.log("id: ", newTrans.id);
	console.log("sourceNumber: ", newTrans.sourceNumber);
	console.log("targetNumber: ", newTrans.targetNumber);
	console.log("amount: ", newTrans.amount);
	console.log("category: ", newTrans.category);
	console.log("time:",newTrans.time );
	console.log("typeof time:", typeof newTrans.time );
	
	if(!newTrans.id || !newTrans.sourceNumber || !newTrans.targetNumber || !newTrans.amount || !newTrans.category){
            res.status(400).send({ error:true, message: 'Please provide all details ' });
        }
	else{
		Transaction.createTrans(newTrans, function(err,Trans){
			if(err)
				res.send(err);
			res.json(Trans);				
				
		});
	}
        

}

exports.getAllTrans = function(req,res){
	Transaction.getAllTransaction(function(err,allTrans){
		if(err)
			res.send(err);
		res.json(allTrans);	
	});
}

exports.get_a_trans = function(req, res) {
  Transaction.getById(req.params.transId, function(err, trans) {
    if (err)
      res.send(err);
    res.json(trans);
  });
};


exports.update_a_trans = function(req, res) {
  Transaction.updateById(req.params.transId, new Transaction(req.body), function(err, trans) {
    
    if (err){
    	if(err.code == "ER_DUP_ENTRY")
        	res.send({message:"Trasaction with same id already exists"});
      	else
      		res.send(err);
    }
    if(trans.changedRows > 0)
    		res.json({message : 'Data successfully Modified'});
    else{
    	res.json({message : 'Record Not found'});
    }  
    // res.json(trans);
  });
};

exports.delete_a_trans = function(req, res) {

	Transaction.deleteById( req.params.transId, function(err, trans) {
    if (err)
      res.send(err);
    res.json({ message: 'trans successfully deleted' });
  });
};