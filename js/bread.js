'use strict';
let Bread = {};

Bread.prices = {
	Wheat: 1,
	Rye: 1,
	White: 1
};

Bread.getPrices = () => {
	return Bread.prices;
};

module.exports = Bread;