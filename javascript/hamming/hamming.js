class Hamming {
	compute(left, right) {
		let leftLength = left.length;
		let rightLength = right.length;

		if (leftLength !== rightLength) {
			throw new Error('left and right strands must be of equal length');
		}

		let result = 0;

		for (let i = 0; i < leftLength; i++) {
			if (left.charAt(i) !== right.charAt(i)) {
				result += 1;
			}
		}

		return result;
	}
}

export default Hamming;