#!/usr/bin/nodejs

require('./lib/algos');
var GematriaPrimus = require('./lib/gematriaprimus');
var LiberPrimus = require('./data/liberprimus');


var page = LiberPrimus.get_page(0);

console.log(page.find_shifts(['Y', 'O', 'U', 'R']));
console.log(page.find_shifts(['TH', 'O', 'U', 'R']));
