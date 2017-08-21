'use strict';

let Prices = {
			"Ham": 1,
			"Turkey": 1.5,
			"Roast Beef": 1.5,
			"Chicken": 0.5,
			"Salami": 1
		};

let Meat = {
	exportData: () => {
		return Prices;
	}
};


module.exports = Meat;