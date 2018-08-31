const NUMERALS = new Map([
		[1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], 
		[6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'], [10, 'X'],
		[20, 'XX'], [30, 'XXX'], [40, 'XL'], [50, 'L'], [60, 'LX'], 
		[70, 'LXX'], [80, 'LXXX'], [90, 'XC'], [100, 'C'], [200, 'CC'], 
		[300, 'CCC'], [400, 'CD'], [500, 'D'], [600, 'DC'], [700, 'DCC'], 
		[800, 'DCCC'], [900, 'CM'], [1000, 'M'], [2000, 'MM'], [3000, 'MMM']]);


function toRoman(num) {
	let result = '';
	let stringAsNum = num.toString();
	let length = stringAsNum.length;
	let numAsArray = stringAsNum.split('')
	let i = 0;

	while (i < length) {
		let numOfZeroes = length - i - 1;
		let current = numAsArray[i];

		if (current != 0) {
			result += convert(current, numOfZeroes);
		}

		i += 1;
	}

	return result;
}

function convert(current, numOfZeroes) {
	let zeroes = '0'.repeat(numOfZeroes);
	let fullCurrentDigit = parseInt(current.toString().concat(zeroes));

	return NUMERALS.get(fullCurrentDigit);
}

export default toRoman;