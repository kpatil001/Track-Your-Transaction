'user strict';
var sql = require('./db.js');

var Transaction = function(transaction){
    this.id = transaction.id;
    this.sourceNumber = transaction.sourceNumber;
	this.targetNumber = transaction.targetNumber;
	this.amount = transaction.amount;
	this.time = transaction.time;
    this.category = transaction.category;
    this.expense = transaction.expense;
   //  this.created_at = new Date();
};

Transaction.createTrans= function (newTrans, result) {    

	if(typeof newTrans.time == "undefined" || newTrans.time==null || newTrans.time == "")
		newTrans.time =new Date();
	
	if(newTrans.amount < 0 )
	{
			console.log("negative amount: ", newTrans.amount);
			newTrans.expense = 1;
			newTrans.amount= Math.abs(newTrans.amount);
	}
	else
	{ 
			newTrans.expense = 0;
	}
			
        sql.query("INSERT INTO details set ?", newTrans, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    
                    if(err.code == "ER_DUP_ENTRY")
                    	result("Trasaction with same id already exists",null);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, "record added successfully");
                }
            });           
};

Transaction.getAllTransaction= function(func){
	sql.query("SELECT * FROM details", function (err, res){
		if(err){
                    console.log("error: ", err);
                    func(err,null);
        }
		else{
				console.log('transs : ', res);
                 func(null, res);
		}                
		
	});
}

Transaction.getById = function (transId, func) {
        sql.query("Select * from details where id = ? ", transId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    func(err, null);
                }
                else{
                    func(null, res);
              
                }
            });   
};

Transaction.updateById = function(id, newTrans, func){

if(typeof newTrans.time == "undefined")
		newTrans.time =new Date();
	
	if(newTrans.amount < 0 )
	{
			console.log("negative amount: ", newTrans.amount);
			newTrans.expense = 1;
			newTrans.amount= Math.abs(newTrans.amount);
	}
	
  sql.query("UPDATE details SET ? WHERE id = ?", [newTrans, id], function (err, res) {
          if(err) {
				console.log("error: ", err);
            	func(err,null);
             }
           else{   
           		console.log("res object:", res);
             	func(null, res);
            	}
            }); 
};

Transaction.deleteById = function(id, func){
     sql.query("DELETE FROM details WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    func(err, null);
                }
                else{
                 func(null, res);
                }
            }); 
};

Transaction.getBySource = function (source, func) {
        sql.query("Select * from details where sourceNumber = ?", source, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    func(err, null);
                }
                else{
                	console.log("getBySOurce", res);
                    func(null, res);
              
                }
            });   
};

Transaction.getByTarget = function (target, func) {
        sql.query("Select * from details where targetNumber = ?", target, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    func(err, null);
                }
                else{
                	console.log("getByTarget", res);
                    func(null, res);
              
                }
            });   
};
Transaction.getByAmount = function (amount, func) {
        sql.query("Select * from details where amount = ?", amount, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    func(err, null);
                }
                else{
                	console.log("getByTarget", res);
                    func(null, res);
              
                }
            });   
};
module.exports= Transaction;