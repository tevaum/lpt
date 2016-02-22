var GematriaPrimus = {
    symbols: 'ᚠᚢᚦᚩᚱᚳᚷᚹᚻᚾᛁᛂᛇᛈᛉᛋᛏᛒᛖᛗᛚᛝᛟᛞᚪᚫᚣᛡᛠ',
    values: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109],
    letters: ['F', 'U', 'TH', 'O', 'R', '(C/K)', 'G', 'W', 'H', 'N', 'I', 'J', 'EO', 'P', 'X', '(S/Z)', 'T', 'B', 'E', 'M', 'L', '(NG/ING)', 'OE', 'D', 'A', 'AE', 'Y', '(IA/IO)', 'EA'],

    get_rune: function(i) {
	return this.symbols[i];
    },

    get_index: function (sym) {
	return this.symbols.search(sym);
    },

    get_index_by_letter: function (l) {
	return this.letters.indexOf(l);
    },

    get_value: function (sym) {
	var i = this.get_index(sym);
	return this.values[i];
    },

    get_letter: function (sym, shift) {
	var mychars = this.letters.slice();

	if (shift) {
	    shift = shift % 29;
	    if (shift > 0) {
		while (shift--) {
		    mychars.unshift(mychars.pop());
		}
	    } else {
		while (shift++) {
		    mychars.push(mychars.shift());
		}
	    }
	}

	var i = this.get_index(sym);
	return mychars[i];
    },

    translate: function(word) {
	var text = '';
	for (var i = 0; i < word.length; i++) {
	    if (this.get_index(word[i]) == -1) {
		text += ' ';
		continue;
	    }
	    text += this.get_letter(word[i]);
	}
	return text;
    },

    decrypt: function (word, key) {
	var ret = '';
	for (var i = 0, s = 0; i < word.length; i++) {
	    if (this.get_index(word[i]) == -1) {
		ret += ' ';
		continue;
	    }

	    if (this.get_index(word[i]) == 0 && s == 56) {
		ret += this.get_letter(word[i]);
		continue;
	    }

	    ret += this.get_letter(word[i], key[s++]);
	}
	return ret;
    },

    sum: function (word) {
	var sum = 0;
	for (var i = 0; i < word.length; i++) {
	    sum += this.get_value(word[i]);
	}
	return sum;
    },

    find_key: function (word, text) {
	var keys = [];
	for (var i = 0; i < word.length; i++) {
	    for (var j = 0; j < this.symbols.length; j++) {
		if (this.get_letter(word[i], j) == text[i]) {
		    keys.push(j);
		    break;
		}
	    }
	}
	return keys;
    }
};

module.exports = GematriaPrimus;
