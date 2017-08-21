'use strict';
let Bread = require('./bread.js');


//load JSON file
let Ajax = {
	loadData: () => {
		return new Promise(function(resolve, reject){
			$.ajax({
				url: 'sandwich.json'
			}).done(function(data){
				resolve(data);
				Bread.loadPrices(data);
			});
		});
	}
};

module.exports = Ajax;