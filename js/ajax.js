'use strict';
//load JSON file

let Ajax = {
	loadData: () => {
		return new Promise(function(resolve, reject){
			$.ajax({
				url: 'sandwich.json'
			}).done(function(data){
				resolve(data);
			});
		});
	}
};

module.exports = Ajax;