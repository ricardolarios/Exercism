function validate(input) {
	let stringInput = input.toString();
	let length = stringInput.length;
	let split = stringInput.split("");

	let i = 0; 
  let	result = 0;
	while(i < length) {
		result = result + Math.pow(split[i].parseInt(), length);
	}

	return result === input;
}