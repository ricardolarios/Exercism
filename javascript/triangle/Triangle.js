class Triangle {
	// Constructor
	constructor(x, y, z) {
		let sideArray = [x, y, z].sort((a, b) => a - b);
		this.x = sideArray[0];
		this.y = sideArray[1];
		this.z = sideArray[2];	
	}

	kind() {
		if (!this.isTriangle()) {
			throw "Not a triangle.";
		}

		let xy = this.x === this.y;
		let xz = this.x === this.z;
		let yz = this.y === this.z;

		if (xy && yz) {
			return 'equilateral';
		}
		else if (xy || yz || xz) {
			return 'isosceles';
		}
		else {
			return 'scalene';
		}
	}

	isTriangle() {
		let noSidesLessEqual0 = this.x > 0 && this.y > 0 && this.z > 0;
		// Sort the sides and then just check the smallest ones.
		let triangleInequality = (this.x + this.y >= this.z);

		console.log(this.x);
		console.log(triangleInequality);

		return noSidesLessEqual0 && triangleInequality;
	}
}

 export default Triangle;