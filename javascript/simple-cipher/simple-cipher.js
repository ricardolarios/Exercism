const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const alphabetMap = new Map(alphabet.map((char, index) => [char, index]));

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

	generateKey() {
		var result = "";
		let i = 100;
		let randomNum = () => { return Math.floor(Math.random() * 26) };
		while(i >= 0) {
			result += alphabet[randomNum()]

			i--;
		}
		return result;
	}

	isValidKey(key) {
		let hasNumbers = /\d/.test(key);
		let hasCaps = /[A-Z]/.test(key);
		let isEmpty = key === '';

		return !(hasNumbers || hasCaps || isEmpty);
	}

	// Encodes the given string according to this cipher's key.
	encode(given) {
		return this.translate(given, 'encode');
	}

	// Decodes the given string according to this cipher's key.
	decode(given) {
		return this.translate(given, 'decode');
	}

	translate(given, operation) {
		let givenLength = given.length;
		let result = '';

		let currentGiven = 0;
		let currentKey = 0;

		while (currentGiven < givenLength) {

			let currentGivenLetter = alphabetMap.get(given.charAt(currentGiven));
			let currentKeyLetter = alphabetMap.get(this.key.charAt(currentKey));

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
}

export default Cipher;