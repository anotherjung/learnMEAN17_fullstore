
//5b add factory to provide data to controller
myApp.factory('orderFactory', function ($route, $http, $location) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var orders = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];
	var factory = {};

	//3 create getHeros method to a callback 
	factory.getOrders = function (callback) {
		//console.log('here in factory');
		//ask nodejs route
		$http.get('/getorders').success(function(output) {
			//console.log('factory.getQuestions http');
			orders = output;
			//pass the heros object to callback
			callback(orders);
			//console.log('factory.getQuestions',questions);
		})
	}

	factory.addOrder = function(info) {
		console.log('fac addQuestion', info);
		//test local
		// questions.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addorder', info).success(function(output) {
			//questions.push({name:info.name})
			console.log('baby factory.addOrder', info);
			//reload the page to fresh the data
			// $location.path('showQuestions');
		})
		$route.reload();
	}	

	factory.delete = function(order, callback) {
		$http.post('/deleteorder', order).success(function (output){
			callback(output);
		});
		$route.reload();

	}


	return factory
}) //ends factory