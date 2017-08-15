'use strict';
let Bread = require('./bread.js');

//given a function for calling data and a form type, creates list on page
let DOM = {
	loadList: (func, type) => {
		let data = Object.keys(func());
		let content = '';
		data.forEach((item)=>{
			content += `
				<div class="form-check">
                	<label for="Wheat" class="form-check-label">
                  		<input type="${type}" class="form-check-input" name="bread">
              			${item}
	                </label>
	            </div>
			`;
		});
		$('#menu').append(content);
	}
};

DOM.loadList(Bread.getPrices, 'radio');