'use strict';

let Prices = {
			"American": 0.2,
			"Swiss": 0.5,
			"Cheddar": 0.3,
			"Pepper Jack": 0.5,
			"Provolone": 0.5
		};

let Cheese = {
	exportData: () => {
		return Prices;
	}
};


module.exports = Cheese;