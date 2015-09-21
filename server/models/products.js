//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var ProductSchema = new mongoose.Schema({
	name: String,
	imageurl: String,
	qty: String,
	created: {type: Date, default: new Date}
});

var Product = mongoose.model('Product', ProductSchema);
//ends model
