class Transcriptor {

	// Transcribes given DNA strand to RNA
	toRna(dna) {
		const dnaArray = dna.split('');
		let result = [];

		dnaArray.forEach(nucleo => {
			switch(nucleo) {
				case 'G':
					result.push('C');
					break;
				case 'C':
					result.push('G');
					break;
				case 'T':
					result.push('A');
					break;
				case 'A':
					result.push('U'):
					break;
				default:
					throw new Error('Invalid input DNA.')
			}
		})

		return result;
	}
}

export default Trasncriptor;