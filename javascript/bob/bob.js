function hey(given) {
	/*


	If question, 'Sure.'
	If yell, 'Whoa, chill out'
	If question and yelling, 'Calm down, I know what I\'m doing!'
	If blank, 'Fine. Be that way!'
	Else, 'Whatever.'

	*/

	if (isQuestion(given)) {
		if (isYelling(given)) {

		}
		else {

		}

		// Or isYelling(given) ? ... : ...
	}
	else if (isQuestion(given)) {

	}
	else if (isBlank(given)) {
		return 'Fine. Be that way!';
	}
	else {
		return 'Whatever.';
	}
}


export 	{ hey };