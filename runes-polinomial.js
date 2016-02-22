#!/usr/bin/nodejs

var GematriaPrimus = require('./lib/gematriaprimus');
var LiberPrimus = require('./data/liberprimus');


var page = LiberPrimus.get_page(0).join('');

function polinomial_value (x) {
    var xx = Math.pow(x, x);

    var p1 = Math.pow(x, xx);
    var p2 = Math.pow(2, xx);
    var p3 = Math.pow(3, xx);

    return p1 + p2 + p3;
}

function polinomial_translate (text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
	if (GematriaPrimus.get_index(text[i]) == -1) {
	    result += ' ';
	    continue;
	}

	var shifts = polinomial_value(i);
	console.log(shifts);
	//result += ;
    }
    return result;
}

console.log(polinomial_translate(page));
