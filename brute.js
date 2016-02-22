var GematriaPrimus = require('./lib/gematriaprimus');
var LiberPrimus = require('./data/liberprimus');

var maps = require('./lib/maps');

var seqs = require('./lib/seqs');

// var test = {
//     word: 'ᚳᛠᛖ',
    
//     dict: [
// 	['(C/K)', 'A', 'N'],
// 	['(C/K)', 'E', 'Y']
//     ]
// };

var test = {
    word: 'ᛠᛖᛁᚷᛉᚷᛋ',
    dict: [
	['M', 'A', '(S/Z)', 'T', 'E', 'R', '(S/Z)']
    ]
};


var key = null;

// for (var i = 0; i < test.dict.length; i++) {
//     key = GematriaPrimus.find_key(test.word, test.dict[i]);
//     console.log(test.word, test.dict[i], key);
//     console.log(seqs.primes(30));
// }

// var numbers = require('./lib/numbers');
// var n = 10;
// console.log(seqs.primes(n), numbers.primes(n));

function translate() {
    console.log(GematriaPrimus.decrypt('', [43,31,73,17,11,31,71]), '\n');
    console.log(GematriaPrimus.decrypt(LiberPrimus.get_page(56).join(''), seqs.primes(1000).map(maps.phi)) + '\n');
    console.log(GematriaPrimus.translate(LiberPrimus.get_page(57).join('')));
}

translate();
