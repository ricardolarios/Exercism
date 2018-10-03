class RotationalCipher {

	// Rotates the given string by the given amount. 
	static rotate(string, rot) {
		var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

		var givenAsArray = string.split('');

		// Function that map will apply to each letter of the given string.
		var mapFunc = (char) => {
			if (/[A-Z]/.test(char)) {
				
			}
			else if (/[a-z]/.test(char)) {

			}
			else {
				return char
			}

			if (alphabet.includes(char)) {
				let current = alphabet.indexOf(char);
				return alphabet[current + rot % 26];
			} 
			else {
				let current = alphabet.indexOf(char.toLowerCase());
				return alphabet[current + rot % 26].toUpperCase();
			}
		}

		return givenAsArray.map(mapFunc).join('');
	}
}

export default RotationalCipher;