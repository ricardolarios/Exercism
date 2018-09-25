function isPangram(given) {
	var alphabet = new Map('abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => [letter, false]));
	let givenAsArray = given.toLowerCase().split('');

	givenAsArray.forEach((current) => {
		if (alphabet.has(current) && !alphabet.get(current)) {
			alphabet.set(current, true);
		}
	})
	
	let result = true;
	alphabet.forEach((value) => { result = result && value});
	return result;
}

export { isPangram };