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

module.exports = {
    mod: function (i) {
	//console.log(i);
	return i % 29;
    },

    phi: function (n) {
	var result = n;
	for (var i = 2; i * i <= n; i++)
	    if (n % i == 0) {
		while (n % i == 0)
		    n /= i;
		result -= result / i;
	    }    
	if (n > 1)
	    result -= result / n;
	return result;
    }
};
