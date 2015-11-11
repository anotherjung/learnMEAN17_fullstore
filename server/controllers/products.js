// //MVC2a controllers
var mongoose = require('mongoose');
var product = mongoose.model('Product');

//MVC2b export
module.exports =  {
	getproducts: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC model
		product.find({}, function(err, results) {
	       if(err) {
	         console.log('err con show', err);
	       } else {
	         res.json(results);
	         console.log('con show', results)
	       }
		 })
	},

	addproduct: function(req, res) {
		console.log('con addproduct', req.body);
		var cc = new product({name:req.body.name, imageurl: req.body.imageurl, qty: req.body.qty, created:Date.now()});
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

	deleteproduct: function(req, res) {
		console.log('con deleteproduct', req.body._id);
		product.remove({_id: req.body._id}, function(err, output) {
			if(err){
				console.log('err',err); 
			} else {
				console.log('baby deleteproduct', req.body._id)
			}
		});
	}


}//ends module.exports