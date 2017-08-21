'use strict';
let Ajax = require('./ajax.js');

let BreadPrices = {};

let Bread = {};

Bread.loadPrices = (data) => {
	BreadPrices = data.Items[0];
	Bread.getPrices();
};

Bread.getPrices = () => {
	return BreadPrices;
};

module.exports = Bread;