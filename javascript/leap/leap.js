class Year {
	Year(year) {
		this.year = year;
	}

	isLeap() {
		if (this.year % 100 == 0) {
			return this.year % 400 == 0;
		}
		else {
			return this.year % 4 == 0;
		}
	}
}

export default Year;