//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var OrderSchema = new mongoose.Schema({
	//customer: String,
	product: {type: Schema.Types.ObjectId, ref: 'Product'},
	qty: Number,
	created: {type: Date, default: new Date},
	//this is an object
	_customer: {type: Schema.ObjectId, ref: 'Customer'},
});

var Order = mongoose.model('Order', OrderSchema);
//ends model
