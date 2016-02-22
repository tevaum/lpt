module.exports = {
    primes_librandi: function (n) {
	var primes = this.primes(n * 2);
	var numbers = [];
	for (var i = 0; i < primes.length && n > 0; i++) {
	    var no = (Math.pow(primes[i], 2) + 2) / 33;
	    if (!this.is_prime(no)) {
		numbers.push(primes[i]);
		n--;
	    }
	    //console.log(i, primes[i], no, !this.is_prime(no));
	}
	return numbers;
    },

    beatty: function (r, n) {
	var numbers = [];
	for (var i = 1; n; i++, n--) {
	    //console.log(i, gr, Math.floor(gr * i));
	    numbers.push(Math.floor(r * i));
	}
	return numbers;
    },

    wythoff_lower: function (n) {
	var r = (1 + Math.sqrt(5)) / 2;
	return this.beatty(r, n);
    },

    wythoff_upper: function (n) {
	var r = ((1 + Math.sqrt(5)) / 2) + 1;
	return this.beatty(r, n);
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
    },

    fibonacci: function (n, u) {
	var numbers = [];
	var no = 0;
	for (var i = 0; numbers.length < n; i++) {
	    no = Number(fib.iterate(i).number);
	    if (!u || numbers.indexOf(no) == -1)
		numbers.push(no);
	}
	return numbers;
    },

    primes: function (n) {
	n -= 2;
	var primes = [2, 3];
	for (var i = 1; n > 0; i++) {
	    var a = (6*i) - 1;
	    if (this.is_prime(a)) {
		primes.push(a);
		n--;
	    } if (this.is_prime(a+2)) {
		primes.push(a + 2);
		n--;
	    }
	}
	return primes;
    },

    is_prime: function (x) {
	var y = x | 0;
	if (y != x) return false;

	var max = Math.sqrt(x);

	for (var i = 2; i <= max; i++) {
	    if (x % i === 0)
		return false;
	}
	return true;
    }
};
