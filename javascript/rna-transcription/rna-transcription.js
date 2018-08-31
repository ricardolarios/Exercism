class Transcriptor {

	// Transcribes given DNA strand to RNA
	toRna(dna) {
		let dnaArray = dna.split('');

		dnaArray = dnaArray.map(nucleo => {
			switch(nucleo) {
				case 'G':
					return 'C';
				case 'C':
					return 'G';
				case 'T':
					return 'A';
				case 'A':
					return 'U';
				default:
					throw new Error('Invalid input DNA.')
			}
		})

		return dnaArray.join('');
	}
}

export default Transcriptor;