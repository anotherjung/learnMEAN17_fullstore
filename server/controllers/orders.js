// //MVC2a controllers
var mongoose = require('mongoose');
var order = mongoose.model('Order');

//MVC2b export
module.exports =  {
	getorders: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//5a associate customer info in orders using populate
		//MVC model
		order.find({})
		.populate('_customer')
		.populate('product')
		.exec(function(err, results) {
			if(err) {
	         //console.log('err con show', err);
	       } else {
	         res.json(results);
	         //console.log('con show', results)
	       }
		})
	},

	orderInfo: function(req, res) {
		order.findOne({_id:req.params.order_id})
		.populate('_customer')
		.populate('product')
		.exec(function(err, results) {
			if(err) {
	         //console.log('err con show', err);
	       } else {
	       	console.log(results);
	         res.json(results);
	         //console.log('con show', results)
	       }
			})
		},


	addorder: function(req, res) {
		console.log('con addorder', req.body);
		var cc = new order(req.body);
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

	orderEdit: function(req, res) {
		console.log('con addorder', req.body);
		order.update( {_id: req.body._id}, 
			{qty: req.body.qty}, 
			function(err) {
				// console.log('11');
				if(err) {
					console.log("err con create", err);
				} else {
				
					// console.log("else redirect");
						// res.redirect('/');
						res.json({message: 'Update successful!'})
				}
			}
		)
	},

	deleteorder: function(req, res) {
		console.log('con deleteorder', req.body._id);
		order.remove({_id: req.body._id}, function(err, output) {
			if(err){
				console.log('err',err); 
			} else {
				console.log('baby deleteorder', req.body._id)
			}
		});
	}


}//ends module.exports