// //MVC2a controllers
var mongoose = require('mongoose');
var customer = mongoose.model('Customer');

//MVC2b export
module.exports =  {
	getcustomers: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC model
		customer.find({}, function(err, results) {
	       if(err) {
	         console.log('err con show', err);
	       } else {
	         res.json(results);
	         //console.log('con show', results)
	       }
		})
	},

	addcustomer: function(req, res) {
		console.log('con addcustomer', req.body);
		var cc = new customer({name:req.body.name, created:Date.now()});
		cc.save(function(err) {
			// console.log('11');
			if(err) {
				console.log("err con create", err);
			} else {
				res.redirect('/');
				console.log("else redirect");
			}
		})
	},

	deletecustomer: function(req, res) {
		console.log('con deletecustomer', req.body._id);
		customer.remove({_id: req.body._id}, function(err, output) {
			if(err){
				console.log('err',err); 
			} else {
				console.log('baby deletecustomer', req.body._id)
			}
		});
	}


}//ends module.exports