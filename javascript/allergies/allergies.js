const ALLERGIES = new Map([
	[1, 'eggs'], [2, 'peanuts'], [4, 'shellfish'], [8, 'strawberries'], 
	[16, 'tomatoes'], [32, 'chocolate'], [64, 'pollen'], [128, 'cats']]);

class Allergies {
	constructor(score) {
		this.score = score;
		this.allergies = this.toList();
	}
}

Allergies.prototype.list = function() {
	return this.allergies;
}

Allergies.prototype.allergicTo = function(allergy) {
	return this.allergies.includes(allergy);
}

Allergies.prototype.toList = function() {
	let currentScore = this.score % 256;
	let currentCheck = 128;
	let result = [];

	while (currentScore > 0) {
		if (currentScore >= currentCheck) {
			result.push(ALLERGIES.get(currentCheck))
		}
		
		currentScore %= currentCheck;
		currentCheck /= 2;
	}
	return result.reverse();
}

export default Allergies;