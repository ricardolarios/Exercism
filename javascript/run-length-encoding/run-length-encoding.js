function encode(given) {
	let array = given.split('');

	let currentIndex = 0;
	let length = array.length;
	let lastChar = '';
	let currentCount = 0;

	let result = '';

	while (currentIndex < length) {
		let currentChar = array[currentIndex];
		if (lastChar !== currentChar) {
			result += completeEncode(lastChar, currentCount);

			currentCount = 1;
			lastChar = currentChar;
		}
		else {
			currentCount += 1;
		}

		currentIndex += 1;
	}
	result += completeEncode(lastChar, currentCount);
	return result;
}

function decode(encoded) {
	let result = '';
	let given = encoded.replace(/ /g, '_');
	while (given !== '') {
		console.log("Given before: " + '\'' + given + '\'');

		let parsed = parseInt(given);
		if (isNaN(parsed)) {
			parsed = 1;
			console.log('got here');
		}
		else {
			var length = parsed.toString().length;
			given = given.substring(length)
		}
		let currentChar = given.charAt(0);
		if (currentChar === '_') {
			currentChar = ' ';
		}

		result += currentChar.repeat(parsed);

		given = given.substring(1);
	}
	console.log(result);
	return result;
}

function completeEncode(char, count) {
	if (count <= 0) {
		return '';
	}
	else if (count === 1) {
		return char;
	}
	else {
		return count + char;
	}
}

export { encode, decode };