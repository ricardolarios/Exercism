const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const ALPHABET_MAP = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 
	'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 
	't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };

class Cipher {
	constructor(key = undefined) {
		if (this.isValidKey(key)) {
			this.key = key || this.generateKey();
			this.keyLength = this.key.length;
		}
		else {
			throw new Error('Bad key');
		}
	}
}

Cipher.prototype.generateKey = function() {
	var result = "";
	let i = 100;
	let randomNum = () => { return Math.floor(Math.random() * 26) };
	while(i >= 0) {
		result += alphabet[randomNum()]

		i--;
	}

	return result;
}

Cipher.prototype.isValidKey = function(key) {
	let hasNumbers = /\d/.test(key);
	let hasCaps = /[A-Z]/.test(key);
	let isEmpty = key === '';

	return !(hasNumbers || hasCaps || isEmpty);
}

// Encodes the given string according to this cipher's key.
Cipher.prototype.encode = function(given) {
	return this.translate(given, 'encode');
}

// Decodes the given string according to this cipher's key.
Cipher.prototype.decode = function(given) {
	return this.translate(given, 'decode');
}


Cipher.prototype.translate = function(given, operation) {
	let givenLength = given.length;
	let result = '';

	let currentGiven = 0;
	let currentKey = 0;

	while (currentGiven < givenLength) {

		let currentGivenLetter = ALPHABET_MAP[given.charAt(currentGiven)];
		let currentKeyLetter = ALPHABET_MAP[this.key.charAt(currentKey)];

		// This is where it checks how to calculate 
		if (operation === 'decode') {
			var cipher = (currentGivenLetter - currentKeyLetter);
			if (cipher < 0) {
				cipher += 26;
			}
		}
		else if (operation === 'encode') {
			var cipher = (currentKeyLetter + currentGivenLetter) % 26;
		}
		else {
			throw new Error('Not a valid operation');
		}

		result += alphabet[cipher];


		currentGiven++;
		currentKey = (currentKey + 1) % this.keyLength;
	}

	return result;
}

export default Cipher;