var GematriaPrimus = require('./lib/gematriaprimus');
var LiberPrimus = require('./data/liberprimus');
var numbers = require('./lib/numbers');

//var text = 'ᚳᛁᚱᚳᚢᛗᚠᛖᚱᛖᚾᚳᛖᛋ';
//LiberPrimus.find(text);
//console.log(LiberPrimus.word(14));
//console.log(LiberPrimus.find('ᛒᚷᛞᛉᛗᛒᛉᚳᛝᚦᚣᛞᚫᛠ'));

var text = 'ᚳᛁᚱᚳᚢᛗᚠᛖᚱᛖᚾᚳᛖᛋ';

var words = [ 'ᛒᚷᛞᛉᛗᛒᛉᚳᛝᚦᚣᛞᚫᛠ',
	      'ᛠᛁᛡᚦᛝᚾᛖᚾᚠᚩᛗᛖᚣᚪ',
	      'ᛏᚠᛂᚱᚹᚠᛋᚾᚹᛂᛖᛒᚢᚦ',
	      'ᚳᛁᚱᚳᚢᛗᚠᛖᚱᛖᚾᚳᛖᛋ' ];

function decode(word, key) {
    var ret = '';
    for (var i = 0; i < word.length; i++) {
	ret += GematriaPrimus.get_letter(word[i], key[i]);
    }
    return ret;
}

var zeroes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// console.log(
//     decode(text, zeroes)
// );

Array.prototype.contains = function (array) {
    var debug = true;
    var starts = [];

    for (var i = 0; i < this.length; i++) {
	if (this[i] == array[0])
	    starts.push(i);
    }

    console.log('found', starts.length, 'possible matches');
    for (var p = 0; p < starts.length; p++) {
	if (debug) console.log('checking for match number', p);
	for (var k = 0; k < array.length; k++) {
	    if (debug) console.log('comparing', k, 'letter:', this[starts[p] + k], array[k]);
	    if (this[starts[p] + k] != array[k]) {
		break;
	    }
	}
    }

    if (k < array.length)
	return false;
    return true;
    //console.log(starts.length);
    //return 'hehe';
};

var mod29 = function (i) {
    //console.log(i);
    return i % 29;
};

var prime_mod29 = function (i) {
    console.log(i);
    return primes[i] % 29;
};

//var primes = numbers.primes(1024 * 700 * 10);
var primes = numbers.primes(10724*3);

var primes_librandi = numbers.primes_librandi(3*4096).map(mod29);

// var prime_shifts = primes.map(function (i) {
//     return i % 29;
// });

// var phi_primes = primes.map(function (i) {
//     return numbers.phi(i) % 29;
// });

// var fib = numbers.fibonacci(1024);
// fib = fib.map(function (i) {
//     return i;
// });

// var wythoff = numbers.wythoff_upper(4096).map(function (i) {
//     //console.log(i);
//     //return i % 29;
//     return primes[i] % 29;
// });

//var beatty_sqrt2 = numbers.beatty(Math.sqrt(2), 4096).map(prime_mod29);

//var beatty_pi = numbers.beatty(Math.PI, 7*1024).map(prime_mod29);

var keys = [
    [12, 25, 19, 9, 18, 27, 14, 16, 17, 13, 17, 18, 7, 13]
];

console.log(primes_librandi.contains(keys[0]));
//console.log(beatty_pi.contains(keys[0]));
// console.log(beatty_sqrt2.contains(keys[0]));
// console.log(wythoff.contains(keys[0]));
//console.log(prime_shifts.contains(keys[0]));
//console.log(phi_primes.contains(keys[0]));
//console.log(fib, fib.contains(keys[0]));

console.log(
    decode(words[0], keys[0])
);

function find_shifts(word, chars) {
    for (var i = 0; i < word.length; i++) {
	for (var j = 0; j < 28; j++) {
	    //console.log(word[i], chars[i]);
	    if (GematriaPrimus.get_letter(word[i], j) != chars[i])
		continue;

	    console.log(j);
	    break;
	}
	console.log();
    }
}

var chars = ['(C/K)', 'I', 'R', '(C/K)', 'U', 'M', 'F', 'E', 'R', 'E', 'N', '(C/K)', 'E', '(S/Z)'];

//find_shifts(words[0], chars);
