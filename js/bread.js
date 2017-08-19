'use strict';
let Ajax = require('./ajax.js');

let Bread = {};


//STATUS:  data loads, need to figure out how to route data to write to
//the DOM and add listeners


Ajax.loadData().then(function(data){
	Bread = data.Bread;
});
