class Series {
	// Constructs a new series with an array of the given digits.
	constructor(digits) {
		this.digits = digits.split('').map(x => parseInt(x));
		this.length = this.digits.length;
	}

	slices(len) {
		if (len > this.length) {
			throw new Error('Slice size is too big.');
		}

		let i = 0;
		let result = [];
		while (i + len <= this.length) {
			result.push(this.digits.slice(i, i + len))
			i += 1;
		}

		return result;
	}
}

export default Series;