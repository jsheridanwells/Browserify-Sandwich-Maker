'use strict';

let _itemList = [];
let _totalPrice = 0;

//3. if class name is /.../
function getObject(e) {
	let $functionSelector = $(e.target).parentsUntil('.row');
	let idNum = $functionSelector[2].id;
	//3.1 return corresponding function
}

//4. search for value as key
function addItem(data) {
	//4.1 add key to item list
	//4.2 add key/value (price) to total price
}

//1. listen for a click
$(window).click((e)=> {
//2. if e.target is an input button
	if (e.target.localName === 'input') {
		getObject(e);
		//2.1 get e.target.value //2.2 get greatgrandparent class name
	}
	});
