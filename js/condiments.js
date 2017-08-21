'use strict';

let Prices = {
			"Mayo": 0.5,
			"Mustard": 0.5,
			"Relish": 0.5,
			"Oil": 0.5,
			"Vinegar": 0.5
		};

let Condiments = {
	exportData: () => {
		return Prices;
	}
};


module.exports = Condiments;