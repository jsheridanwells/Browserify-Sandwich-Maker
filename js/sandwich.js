'use strict';
let Bread = require('./bread.js');

let prices = [];

function getPrices(data) {
	prices.push(data);
}

getPrices(Bread.getPrices());

console.log("prices in sandwich", prices);
$(window).click(function(e){
	if (e.target.hasAttribute('name')) {
		console.log("e target name", e.target.name);
	}
});