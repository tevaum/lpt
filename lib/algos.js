var GematriaPrimus = require('./gematriaprimus.js');
var numbers = require('./numbers');

Array.prototype.translate = function () {
    var result = '';
    for (var l = 0; l < this.length; l++) {
	for (var i = 0; i < this[l].length; i++) {
	    if (GematriaPrimus.get_index(this[l][i]) == -1)
		result += ' ';
	    else
		result += GematriaPrimus.get_letter(this[l][i]);
	}
    }
    return result + '\n';
};

Array.prototype.phi_prime_shift_translate = function () {
    var str = this.reduce(function (p, c) { return p + c;}, '');
    
    var primes = numbers.primes(str.length);
    var shifts = primes;

    var result = '';
    for (var s = 0, i = 0; i < str.length; i++) {
	if (GematriaPrimus.get_index(str[i]) == -1) {
	    result += ' ';
	    continue;
	}

	if (s == 56 && str[i] == GematriaPrimus.get_rune(0)) {
	    result += str[i];
	    continue;
	}

	result += GematriaPrimus.get_letter(str[i], numbers.phi(primes[s++]));
    }
    return result;
};

Array.prototype.fibonacci_shift_translate = function () {
    var str = this.reduce(function (p, c) { return p + c;}, '');
    var shifts = numbers.fibonacci(str.length);

    var result = '';
    for (var s = 0, i = 0; i < str.length; i++) {
	if (GemetriaPrimus.get_index(str[i]) == -1) {
	    result += ' ';
	    continue;
	}

	result += GametriaPrimus.get_letter(str[i], shifts[s++]);
    }
};

Array.prototype.prime_shift_translate_t14 = function () {
    var str = this.reduce(function (p, c) { return p + c;}, '');
    
    var shifts = numbers.primes(str.length);

    var result = '';
    for (var s = 0, i = 0; i < str.length; i++) {
	if (GematriaPrimus.get_index(str[i]) == -1) {
	    result += ' ';
	    continue;
	}

	if (s == 56 && str[i] == 'ᚠ') {
	    result += str[i];
	    continue;
	}

	//console.log(str[i], (1 - shifts[s]) % 29, GematriaPrimus.get_letter(str[i], 1-shifts[s]));
	//console.log(s, str[i]);
	result += GematriaPrimus.get_letter(str[i], 1-shifts[s++]);
    }
    return result;
};

Array.prototype.find_shifts = function (phrase) {
    var str = this.reduce(function (p, c) { return p + c;}, '');

    var shifts = [];
    for (var i = 0; i < phrase.length; i++) {
	shifts.push(Math.abs(GematriaPrimus.get_index(str[i]) - GematriaPrimus.get_index_by_letter(phrase[i])));
    }
    return shifts;
};
