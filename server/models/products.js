//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var ProductSchema = new mongoose.Schema({
	name: String,
	imageurl: { type: String, default: 'http://app.resrc.it/s=w1280,pd2/o=85/http://www.your-site.co/image.jpg'},
	qty: String,
	created: {type: Date, default: new Date}
});

var Product = mongoose.model('Product', ProductSchema);
//ends model
