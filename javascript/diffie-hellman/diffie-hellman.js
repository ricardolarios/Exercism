class DiffieHellman {
	constructor(p, g) {
		if (!(this.isValidInput(p) && this.isValidInput(g))) {
			throw "Not a valid input.";
		}

		this.p = p;
		this.g = g;
	}

	// Returns true if the given input is a valid number for a Diffie Hellman situation.
	isValidInput(input) {
		let isGreaterThanOne = input > 1;
		// Not sure what ya mean by "out of range" so here we go, we're gonna assume that it means less than 9999.
		let isSmallEnough = input < 9999;

		let isPrime = this.isPrime(input);

		return isGreaterThanOne && isSmallEnough && isPrime;
	} 

	// Returns true if the given input is a prime number.
	isPrime(input) {
		for (let i = 2; i < (input / 2); i++) {
			if (input % i === 0) {
				return false;
			}
		}
		return true;
	}

	// Returns the public key from a given private key if private key is valid.
	getPublicKeyFromPrivateKey(privateKey) {
		if (this.isValidPrivateKey(privateKey)) {
			return (this.g ** privateKey) % this.p; 
		}
		else {
			throw "bad";
		}
	}

	// Calculates the secret key from a given private and public key.
	getSharedSecret(privateKey, publicKey) {
		return (publicKey ** privateKey) % this.p;
	}

	// Returns true if the given private key is valid (i.e. greater than 1, less than value p).
	isValidPrivateKey(privateKey) {
		return (privateKey > 1) && (privateKey < this.p);
	}
}

export default DiffieHellman;