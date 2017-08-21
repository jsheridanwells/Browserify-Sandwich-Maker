'use strict';

let Prices = {
			"Wheat": 1,
			"Rye": 1,
			"White": 1
		};

let Bread = {
	exportData: () => {
		return Prices;
	}
};

module.exports = Bread;