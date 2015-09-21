myApp.controller('customerController', function ($route, $scope, $location, customerFactory) { 
	//3 create scope for array 
	$scope.customers = [];
	//3 get data from factory
	customerFactory.getCustomers(function (data){
		$scope.customers = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//2a ng-click add
	$scope.addCustomer = function (newCustomer) {				
		console.log('con addCustomer',$scope.newCustomer);
				//6 use factory method, if new customer name is unique
				if(!customerFactory.checkCustomer($scope.newCustomer.name)){
					//console.log('2');
					//$('.error').addClass('hide');					
					//6 passing object to factory
					customerFactory.addCustomer($scope.newCustomer);
					$('.error').addClass('hide');
					$('.success').removeClass('hide');
					//helps validations
					$route.reload();

				} else {
					$('.error').removeClass('hide');

				}
				//clear form values by giving it an empty object
				$scope.newCustomer = {};


	}

	//5c ng-click delete
	$scope.removeCustomer = function (customer) {
		// $scope.heros.splice($index, 1);
		//  indexOf() calculates the index of the item whose value matches what we pass it.  Look it up!
		$scope.customers.splice($scope.customers.indexOf(customer), 1);
	}

}); //ends controller