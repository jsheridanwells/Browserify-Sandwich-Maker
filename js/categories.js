'use strict';

let CategoryNames = [
		{
			"id" : 0,
			"name" : "Bread"
		},
		{
			"id" : 1,
			"name" : "Meat"
		},
		{
			"id" : 2,
			"name" : "Cheese"
		},
		{
			"id" : 3,
			"name" : "Veggies"
		},
		{
			"id" : 4,
			"name" : "Condiments"
		}
	];

let Categories = {
	exportCategories: () => {
		return CategoryNames;
	}
};

module.exports = Categories;