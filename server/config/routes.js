//MVC1a for routes
var mongoose = require('mongoose');
var customer = mongoose.model('Customer');
var products = mongoose.model('Product');
var orders = mongoose.model('Order');


//MVC2h moved to model

// //MVC2c for controller
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

// var users = require('../controllers/users.js');


//start MVC1d export
module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		console.log('home page loaded');
	})


	//route to display data from db
	app.get('/getorders', function (req, res) {
		//test http://localhost:8080/getproducts
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		orders.getorders(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})

	//route to add data to db
	app.post('/addorder', function (req, res) {
		console.log('rou addo', req.body)
		orders.addorder(req,res)
	})

	//route to add data to db
	app.post('/deleteorder', function (req, res) {
		console.log('rou deleteo', req.body)
		orders.deleteproduct(req,res)
	})






	//route to display data from db
	app.get('/getproducts', function (req, res) {
		//test http://localhost:8080/getproducts
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		products.getproducts(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})

	//route to add data to db
	app.post('/addproduct', function (req, res) {
		console.log('rou addproduct', req.body)
		products.addproduct(req,res)
	})

	//route to add data to db
	app.post('/deleteproduct', function (req, res) {
		console.log('rou deleteproduct', req.body)
		products.deleteproduct(req,res)
	})






	//route to add data to db
	app.post('/addcustomer', function (req, res) {
		console.log('rou addcustomer', req.body)
		customers.addcustomer(req,res)
	})


	//route to add data to db
	app.post('/deletecustomer', function (req, res) {
		console.log('rou deletecustomer', req.body)
		customers.deletecustomer(req,res)
	})

	//route to display data from db
	app.get('/getcustomers', function (req, res) {
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		customers.getcustomers(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})


}//ends MVC export
