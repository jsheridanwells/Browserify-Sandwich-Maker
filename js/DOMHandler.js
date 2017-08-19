'use strict';
let Ajax = require('./ajax.js');

function printCategories(data) {
	data.Categories.forEach((category, index) => {
		let row = $('<div></div>').addClass('row');
		console.log("firing 1");
		if (index % 2 === 0) {
			console.log("firing 2");
			let content = `
				<div class="col-6" id="category--${category.id}">
					<h3>${category.name}</h3>
				</div>
			`;
			row.append(content);
		} else {
			console.log("firing 3");
			let content = `
				<div class="col-6" id="category--${category.id}">
					<h3>${category.name}</h3>
				</div>
			`;
			row.append(content);
			$('#menu').append(row);
		}
	});
}

// function printItems(data, inputType) {
// 	//determine input type
// 	//create content string w/ label and input
// 	let content = '';
// 	data.items.forEach((item)=>{
// 		let itemNames = Object.keys(item);
// 		content += `
// 			<label for="" class="form-check-label">
// 				<input type="${inputType}" class="form-check-input" name="">
// 				${item}
// 		`;
// 	});
// 	//append to row
// 	//append to #menu
// }

$(window.document).ready(function(){
	Ajax.loadData().then(function(data){
		//make array of item names
		console.log("show me the ", data);
		printCategories(data);
	});
});