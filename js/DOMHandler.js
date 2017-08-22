'use strict';
let Categories = require('./categories.js');
let Bread = require('./bread.js');
let Meat = require('./meat.js');
let Cheese = require('./cheese.js');
let Veggies = require('./veggies.js');
let Condiments = require('./condiments.js');
let Sandwich = require('./sandwich.js');

let Handler = {};

//prints categories from JSON to the DOM
function printCategories(data) {
	var $row = $('<div class="row"></div>');
	data.forEach((item, index)=>{
		let frame = `
				<div class="col-6" id="col--${item.id}">
					<h3>${item.name}</h3>
				</div
			`;
		if (index % 2 === 0) {
			$($row).append(frame);
			if (index === data.length -1) {
				frame = `
					<div class="col-6">
						<h3>Your Sandwich:</h3>
						<ul id="item-list"></ul>
						<h4>Your Total: $<span id="total"></span></h4>
						<button id="clear">Clear</button>
					</div>`;
				$($row).append(frame);
				$('#menu').append($row);
				$('#clear').click(()=>{
					Sandwich.clearItems();
					$('#item-list').html('');
					Handler.printTotal();
				});
			}
		} else {
			$($row).append(frame);
			$('#menu').append($row);
		}
	});
}

// prints items from objects to each category
function printItems(data, categoryIndex, type) {
	let items = Object.keys(data);
	let prices = Object.values(data);
	items.forEach((item, i) => {
		let frame = `
			<div class="${type}">
			  <label>
			    <input type="${type}" value="${item}" name="sandwich-item">
			    <span>${item}</span>: ${prices[i].toFixed(2)}
			  </label>
			</div>
		`;
		$('#col--' + categoryIndex).append(frame);
	});
}

//prints selected items and total price to the DOM

Handler.printTotal = () => {
	let itemsArr = Sandwich.sendItems();
	let total = Sandwich.sendTotal();
	let listItems = '';
	itemsArr.forEach(item => {
		listItems += `<li class="sandwich-item">${item}</li>`;
	});
	$('#item-list').html(listItems);
	$('#total').html(total.toFixed(2));
};

//load data and calls printing to DOM functions
$(window).ready(function() {
	printCategories(Categories.exportCategories());
	printItems(Bread.exportData(), 0, 'radio');
	printItems(Meat.exportData(), 1, 'checkbox');
	printItems(Cheese.exportData(), 2, 'checkbox');
	printItems(Veggies.exportData(), 3, 'checkbox');
	printItems(Condiments.exportData(), 4, 'checkbox');
});

//1. listen for a click
$(window).click((e)=> {
//2. if e.target is an input button
	if (e.target.localName === 'input') {
		if (e.target.checked) {
			let data = Sandwich.getObject(e);
			Sandwich.addItem(data, e.target.value);
			Handler.printTotal();
		} else {
			let data = Sandwich.getObject(e);
			Sandwich.removeItem(data, $(e.target).next().text());
			Handler.printTotal();
		}
	}
});

module.exports = Handler;