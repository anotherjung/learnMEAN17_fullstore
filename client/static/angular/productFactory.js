
//5b add factory to provide data to controller
myApp.factory('productFactory', function ($http, $route) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var products = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];

	var factory = {};

	//3 create getHeros method to a callback 
	factory.getProducts = function (callback) {
		//console.log('here in factory');
		//ask nodejs route
		$http.get('/getproducts').success(function(output) {
			//console.log('factory.getQuestions http');
			products = output;
			//pass the heros object to callback
			callback(products);
			//console.log('factory.getQuestions',questions);
		})
	}

	factory.addProduct = function(info) {
		console.log('fac addQuestion', info);
		//test local
		// questions.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addproduct', info).success(function(output) {
			//questions.push({name:info.name})
			console.log('baby factory.addProduct', info);
			//reload the page to fresh the data
			// $location.path('showQuestions');
		});
		$route.reload();
	}	

	factory.delete = function(product, callback) {
		$http.post('/deleteproduct', product).success(function (output){
			callback(output);
		});
		$route.reload();

	}


	// //6 check array to see if customer name exists
	// factory.checkQuestion = function(newQuestionName) {
	// 	console.log('fac checkQuestion', newQuestionName);
	// 	for (var i = 0; i < questions.length; i++) {
	// 		console.log('1');
	// 		if (questions[i].name == newQuestionName) {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// }

	return factory
}) //ends factory