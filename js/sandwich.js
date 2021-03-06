'use strict';
let Handler = require('./DOMHandler.js');
let Bread = require('./bread.js');
let Meat = require('./meat.js');
let Cheese = require('./cheese.js');
let Veggies = require('./veggies.js');
let Condiments = require('./condiments.js');

let _itemList = [];
let _totalPrice = 0;

let Sandwich = {
	getObject: (e) => {
		//2.1 get e.target.value
		let item = e.target.value;
		//2.2 get greatgrandparent class name
		let $functionSelector = $(e.target).parentsUntil('.row');
		let idNum = $functionSelector[2].id;
		//3.1 return corresponding function
		switch (idNum) {
			case 'col--0':
				return Bread.exportData();
			case 'col--1':
				return Meat.exportData();
			case 'col--2':
				return Cheese.exportData();
			case 'col--3':
				return Veggies.exportData();
			case 'col--4':
				return Condiments.exportData();
		}
	},
	//4. search for value as key
	addItem: (data, key) => {
		//4.1 add key to item list
		_itemList.push(key);
		//4.2 add key/value (price) to total price
		_totalPrice += data[key];

	},
	//4.1 remove item from new array
	removeItem: (data, key) => {
		let deletedItem = _itemList.indexOf(key);
		_itemList.splice(deletedItem, 1);
		_totalPrice -= data[key];


	},
	//5. export _itemList
	sendItems: () => {
		return _itemList;
	},

	//6. export _totalPrice
	sendTotal: () => {
		return _totalPrice;
	}

};

module.exports = Sandwich;