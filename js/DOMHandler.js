'use strict';
let Categories = require('./categories.js');
let Bread = require('./bread.js');
let Meat = require('./meat.js');
let Cheese = require('./cheese.js');
let Veggies = require('./veggies.js');
let Condiments = require('./condiments.js');
let Sandwich = require('./sandwich.js');

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
					<div class="col-6" id="total">
						<h3>Your Sandwich:</h3>
						<button id="clear">Clear</button>
					</div>`;
				$($row).append(frame);
				$('#menu').append($row);
				$('#clear').click(()=>{
					Sandwich.clearItems();
					printTotal();
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
			    ${item}: ${prices[i].toFixed(2)}</1>
			  </label>
			</div>
		`;
		$('#col--' + categoryIndex).append(frame);
	});
}

//prints selected items and total price to the DOM

function printTotal() {
		let items = Sandwich.sendItems();
		let total = Sandwich.sendTotal();
		if (items.length !== 0) {
			let frame = `<p>${items[items.length - 1]}</p>`;
			$('#total-price').remove();
			let totalPrice = `<h4 id="total-price">Your Total: ${total.toFixed(2)}</h4>`;
			$(totalPrice).insertBefore('#clear');
			$(frame).insertBefore('#total-price');
		}
}


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
		let data = Sandwich.getObject(e);
		Sandwich.addItem(data, e.target.value);
		//print total price & items to the DOM
		printTotal();
	}
});