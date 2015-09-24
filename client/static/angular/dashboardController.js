myApp.controller('dashboardController', function ($scope, orderFactory, customerFactory, productFactory) { 

	//3 create scope for array 
	$scope.orders = [];
	//3 get data from factory
	orderFactory.getOrders(function (data){
		$scope.orders = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//3 create scope for array 
	$scope.customers = [];
	//3 get data from factory
	customerFactory.getCustomers(function (data){
		$scope.customers = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//3 create scope for array 
	$scope.products = [];
	//3 get data from factory
	productFactory.getProducts(function (data){
		$scope.products = data;
		//console.log('questionFactory.getQuestions', data);
	})



}); //ends controller