//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/view1.html'
	})
	.when('/products',{
		templateUrl: 'partials/view1products.html'
	})
	.when('/orders',{
		templateUrl: 'partials/view2orders.html'
	})
	.when('/customers',{
		templateUrl: 'partials/view3customers.html'
	})	
	.when('/settings',{
		templateUrl: 'partials/view4settings.html'
	// })
	// .otherwise({
	// 	redirectTo: '/'
	});
})//ends config

