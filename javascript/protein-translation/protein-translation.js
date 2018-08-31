function translate(rna = '') {
	let rnaArray = rnaToArray(rna);

	return toProtein(rnaArray);
}

function rnaToArray(rna) {
	let result = [];

	if (length % 3 !== 0) {
		throw new Error("Not a valid RNA strand.");
	}
	else {
		let length = rna.length;
		let i = 0;
		while(i < length) {
			result.push(rna.substring(i, i + 3));
			i = i + 3;
		}
	}
	return result;
}

function toProtein(rna) {
	let result = [];
	let length = rna.length;

	for(let i = 0; i < length; i++) {
		let current = rna[i];

		switch(current) {
			case 'AUG':
				result.push('Methionine');
				break;
			case 'UUU':
			case 'UUC':
				result.push('Phenylalanine');
				break;
			case 'UUA':
			case 'UUG':
				result.push('Leucine')
				break;
			case 'UCU':
			case 'UCC':
			case 'UCA':
			case 'UCG':
				result.push('Serine');
				break;
			case 'UAU':
			case 'UAC':
				result.push('Tyrosine');
				break;
			case 'UGU':
			case 'UGC':
				result.push('Cysteine');
				break;
			case 'UGG':
				result.push('Tryptophan');
				break;
			case 'UAA':
			case 'UAG':
			case 'UGA':
				return result;
				break;
			default:
				throw new Error('Invalid codon')
		}
	}

	return result;
}

export default translate;