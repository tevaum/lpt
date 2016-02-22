
//console.log(runes, runes.length);
//console.log(text, text.length);

function shift_chars(n) {
    var mychars = chars.slice();

    for (var i = 0; i < n; i++)
	//mychars.unshift(mychars.pop());
	mychars.push(mychars.shift());

    return mychars;
}

function translate(text, n) {
    if (n === undefined) n = 0;

    var result = '';
    for (var i = 0; i < text.length; i++) {
	if ([':', ' ', '\n'].indexOf(text[i]) != -1)
	    result += text[i];
	else {
	    var pos = runes.search(text[i]);
	    var mychars = shift_chars(n);
	    result += mychars[pos];
	}
    }

    return result;
}

function key_shift_translate(text) {
    var keys = [0, 4, 26, 40, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54];

    var result = '';
    for (var i = 0, j = 0; j < text.length; i++, j++) {
	if (i == 56) result += text[j++] + '.';

	var pos = runes.search(text[j]);
	var mychars = shift_chars(keys[i]%29-1);
	result += mychars[pos];
	//console.log(i, text[j], keys[i]%29, mychars[pos]);
    }
    return result;
}

function prime_shift_translate(text) {
    var keys = generate_prime_numbers(text.length);

    var result = '';
    for (var i = 0, j = 0; j < text.length; i++, j++) {
	if (i == 56) result += text[j++] + '.';

	var pos = runes.search(text[j]);
	var mychars = shift_chars(keys[i]%29-1);
	result += mychars[pos];
	//console.log(i, text[j], keys[i]%29, mychars[pos]);
    }
    return result;
}

//chars.reverse();

// for (var i = 0; i < runes.length; i++) {
//     chars.push(chars.shift());
//     var t = translate(text);
//     console.log(t, t.length);
// }

// console.log('Page 39b');
// console.log(prime_shift_translate(page['39b']));

// console.log('0');
// console.log(prime_shift_translate(page[0]));
// console.log(page[0].length);

// // OK
// console.log('Page 56');
// console.log(prime_shift_translate(page[56]));

// console.log('Page 57');
// console.log(translate(page[57]));
//1713
//551


// var result = '';
// for (var i = 0; i < page[0].length; i+=2) {
//     //var val = runes.search(page[0][i]);
//     var val1 = runes.search(page[0][i]);
//     var val2 = runes.search(page[0][i+1]);
//     var val = (val1 << 5) | val2;
//     console.log(val, val1 + val2);
//     // if (val > 29) {
//     // 	console.error('invalid value:', val, i, runes[0][i]);
//     // 	process.exit(-1);
//     // }
//     if (val > 58) {
//     	console.error('invalid value:', val, i, runes[0][i]);
//     	process.exit(-1);
//     }
    
//     console.log(val);
//     result += base58_encode(val);
// }

// console.log(page[0].length);

// console.log(result);

function base58_encode(n) {
    var charset_rp = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz'; // riple
    var charset_bt  = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'; // bitcoin
    var charset_fl = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'; // flickr
    console.log(charset_bt1 == charset_bt2);
    //console.log(charset[n]);
    //return charset[n];
}

var v = [
    '3N', '3p', '2l', '36', '1b', '3v', '26', '33',
    '1W', '49', '2a', '3g', '47', '04', '33', '3W',
    '21', '3M', '0F', '0X', '1g', '2H', '0x', '1R', '1n', '3L', '2r', '0P', '2U', '16', '2L', '2D', '1t', '1s', '3H', '0d', '0s', '1K', '2D', '05', '1K', '1O', '0S', '1D', '3o', '1l', '3J', '1G', '4D', '0G', '0l', '0x', '1Q', '2p', '2a', '1K', '4E', '1w', '2Q', '19', '1k', '3G', '24', '0p', '22', '4F', '0P', '3C', '3J', '1D', '2n', '1m', '2i', '1J', '3P', '2v', '1s', '2O', '0k', '1M', '2M', '0w', '3L', '3D', '2r', '0S', '1p', '15', '3V', '3e', '3I', '0n', '3u', '1O', '0u', '0Z', '3g', '2U', '1C', '0Y', '1N', '3n', '0W', '3Q', '22', '13', '0V', '3c', '0E', '34', '0W', '1t', '1D', '2N', '3H', '47', '0s', '2p', '0Z', '34', '0g', '3v', '1Q', '0s', '0D', '0K', '2h', '3D', '3L', '2x', '1Q', '20', '2n', '2L', '1C', '2p', '0A', '29', '3r', '0D', '45', '0k', '2e', '2W', '25', '3U', '1W', '2r', '46', '2s', '2X', '39', '3p', '0X', '0E', '1q', '0q', '4B', '49', '48', '3r', '3b', '3C', '1M', '1j', '0I', '4A', '48', '40', '3m', '4E', '0s', '2S', '1v', '3T', '0I', '3t', '2B', '2k', '2t', '2O', '0e', '2l', '1L', '28', '2a', '0J', '1L', '0c', '3C', '2o', '0X', '00', '2Z', '2d', '1T', '2u', '1t', '1j', '0l', '1o', '1E', '3T', '18', '3E', '1G', '27', '0L', '0v', '2t', '06', '11', '1A', '2U', '4B', '1O', '2M', '3d', '2S', '0x', '0w', '0q', '0p', '2V', '18', '0q', '1D', '49', '2O', '00', '1v', '2t', '1k', '3s', '3G', '21', '3w', '0W', '29', '2r', '2O', '2L', '0g', '3Y', '0M', '0u', '3I', '3C', '1r', '2c', '2q', '3o', '30', '0a', '39', '1K'];

function base58_decode() {
    var charset_rp = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz'; // riple
    var charset_bt = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'; // bitcoin
    var charset_fl = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'; // flickr
    var charset_c1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx'; // cicada approach 1

    console.log(v.length);
    
    var charset = charset_c1;

    for (var i = 0; i < v.length; i++) {
	//console.log(v[i], v[i][0]);
	var val = charset.search(v[i][0]) * charset.length + charset.search(v[i][1]);
	console.log(v[i], val, val.toString(16));
    }
}

//base58_decode();

// Page 0 - Fibonacci decoder
console.log(page[0].length);

var sfib = generate_fibonacci_series(20,1);
var spri = generate_prime_numbers(6770);

var result = '';
for (var i = 0; i < 20; i++) {
    var val = runes.search(page[0][i]);

    var shift = Math.abs(spri[sfib[i]]);
    //console.log(shift);
    var mychars = shift_chars(shift%runes.length);

    result += mychars[val];
    //console.log(page[0][i], val, mychars[val]);
    //console.log(i, sfib[i], spri[i], spri[sfib[i]]);
    //if (i == 15) process.exit(0);
}

console.log(result);


/*
var GematriaPrimus = require('./gematriaprimus.js');

//console.log(texts, texts.length);

function text_info (text) {
    console.log('text has', text.length, 'lines');
    for (var l = 0; l < text.length; l++) {
	var sum = 0;
	for (var i = 0; i < text[l].length; i++) {
	    if (GematriaPrimus.get_index(text[l][i]) == -1) continue;
	    sum += GematriaPrimus.get_value(text[l][i]);
	}
	console.log('sum of line', l, 'is', sum);
    }
};

//console.log(texts[15].translate());
//console.log(texts[14].prime_shift_translate_t14());

// for (var i = 0; i < 14; i++) {
//     console.log(texts[i].join(''));
//     console.log(texts[i].prime_shift_translate() + '\n\n');
// }

texts[0].find_seeks(['Y', 'O', 'U']);
 */
