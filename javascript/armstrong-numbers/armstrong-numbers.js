function validate(input) {
	let stringInput = input.toString();
	let length = stringInput.length;
	let split = stringInput.split("");

	let i = 0; 
  let	result = 0;
	while(i < length) {
		result = result + Math.pow(parseInt(split[i], 10), length);
		i = i + 1;
	}

	return result === input;
}

export { validate };