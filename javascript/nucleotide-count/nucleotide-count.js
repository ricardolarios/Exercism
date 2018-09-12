class NucleotideCounts {

	// Parses the given DNA to determine how many of each nucleotide is present.
	static parse(given) {
		let count = new Map([['A', 0], ['C', 0], ['G', 0], ['T', 0]]);
		given.split('').forEach(nucleo => {
			switch(nucleo) {
				case 'A':
					count.set('A', count.get('A') + 1);
					break;
				case 'C':
					count.set('C', count.get('C') + 1);
					break;
				case 'G':
					count.set('G', count.get('G') + 1);
					break;
				case 'T':
					count.set('T', count.get('T') + 1);
					break;
				default:
					throw new Error('Invalid nucleotide in strand');
			}
		})

		return Array.from(count.values()).join(' ');
	}
}

export default NucleotideCounts;