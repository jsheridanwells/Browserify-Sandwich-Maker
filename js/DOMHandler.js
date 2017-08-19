'use strict';
let Ajax = require('./ajax.js');

function printCategories(data) {
	let row;
	data.Categories.forEach((category, index) => {
		if (index % 2 === 0) {
			row = $('<div></div>').addClass('row');
			let content = `
				<div class="col-md-6" id="category--${category.id}">
					<h3>${category.name}</h3>
				</div>
			`;
			row.append(content);
			if (index === data.Categories.length - 1) {
				content = `
					<div class="col-md-6" id="total">
						<h3>Your Sandwich:<h3>
					</div>
				`;
				row.append(content);
				$('#menu').append(row);
			}
		} else {
			let content = `
				<div class="col-md-6" id="category--${category.id}">
					<h3>${category.name}</h3>
				</div>
			`;
			row.append(content);
			$('#menu').append(row);
		}
	});
}

function printItems(data) {
	data.Items.forEach((item, index)=>{
		let items = Object.keys(item);
		items.forEach((item)=>{
			let content = `
				<div class="form-check">
					<label for="${item}" class="form-check-label">
						<input type="checkbox" name="${item}">
						${item}
					</label>
				</div>
			`;
			$('#category--' + index).append(content);
		});
	});
}

$(window.document).ready(function(){
	Ajax.loadData().then(function(data){
		//make array of item names
		console.log("show me the ", data);
		printCategories(data);
		printItems(data);
	});
});