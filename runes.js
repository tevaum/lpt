#!/usr/bin/nodejs

require('./lib/algos');
var GematriaPrimus = require('./lib/gematriaprimus');
var LiberPrimus = require('./data/liberprimus');
var numbers = require('./lib/numbers');


console.log(LiberPrimus.get_page(56).phi_prime_shift_translate() + '\n');

console.log(LiberPrimus.get_page(57).translate());

