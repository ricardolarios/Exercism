export default class Words {
	count(given) {
		/* This is how it fucking should be instead of using objects, assholes.
		let result = new Map();
		const addToMap = function(cur) {
			result.has(cur) ? result.set(cur, result.get(cur) + 1) : result.set(cur, 1);
		}
	
		given.toLowerCase().split(/[\s|\n|]+/).forEach(addToMap);
		return result;
		*/

		let result = {};
		const addToMap = function(cur) {
			result.has(cur) ? result.set(cur, result.get(cur) + 1) : result.set(cur, 1);
		}
	
		given.toLowerCase().split(/[\s|\n|]+/).forEach(addToMap);
		return result;
	}
}

