//5b add factory to provide data to controller
myApp.factory('customerFactory', function ($http, $location) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var customers = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];

	var factory = {};

	factory.getThisCustomer = function(thisCustomer, callback) {
		//console.log('factory.getThisCustomer', thisCustomer)
		$http({url:'/getcustomer', method:'GET', params:{id:thisCustomer}}).success(function (output) {
			callback(output);
		});
	}

	//3 create getHeros method to a callback 
	factory.getCustomers = function (callback) {
		//console.log('here in factory');
		//ask nodejs route
		$http.get('/getcustomers').success(function(output) {
			//console.log('factory.getCustomers http');
			customers = output;
			//pass the heros object to callback
			callback(customers);
			//console.log('factory.getCustomers',customers);
		})
	}

	factory.addCustomer = function(info) {
		console.log('fac addCustomer', info);
		//test local
		// customers.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addcustomer', info).success(function(output) {
			//customers.push({name:info.name})
			console.log('baby added customer', info);
			//reload the page to fresh the data
			// $location.path('showCustomers');
		})
	}	

	//6 check array to see if customer name exists
	factory.checkCustomer = function(newCustomerName) {
		//console.log('factory.checkCustomer1', newCustomerName);
		for (var i = 0; i < customers.length; i++) {
			//console.log('factory.checkCustomer2');
			if (customers[i].name == newCustomerName) {
				return true;
			}
		}
		return false;
	}

	return factory
}) //ends factory