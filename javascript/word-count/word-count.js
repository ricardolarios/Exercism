export default class Words {
	count(given) {
		return given.toLowerCase().split(/[\s|\n|]+/);
	}
}

