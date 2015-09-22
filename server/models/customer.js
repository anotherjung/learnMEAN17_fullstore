//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var CustomerSchema = new mongoose.Schema({
	name: String,
	created: {type: Date, default: new Date},
	//tip this is an array, then go orders, order has 1 customer
	orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
});

var Customer = mongoose.model('Customer', CustomerSchema);
//ends model
