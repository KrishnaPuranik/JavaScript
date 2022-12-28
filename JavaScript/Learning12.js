console.log("")
console.log("Learning12 - Higher-order function - Functional Programming");
console.log("")

// The function which takes another function as argument or 
// the function that return another function is called Higher-order function.

function x() {
	console.log("Krishna")
}

function y(x) {
	x();
}

// Functional Programming

const radius = [3, 1, 2, 4];

const area = function (radius) {
	return Math.PI * radius * radius;
}

const circumference = function (radius) {
	return 2 * Math.PI * radius;
}

const diameter = function (radius) {
	return 2 * radius;
}

const calculate = function (radius, logic) {
	const output = []

	for (let i = 0; i < radius.length; i++) {
		output.push(logic(radius[i]));
	}

	return output
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


// Function Map is a Higher order function
console.log(radius.map(area));


// We can write our calculate function as map function

Array.prototype.calculate1 = function (logic) {
	const output = []

	for (let i = 0; i < this.length; i++) {
		output.push(logic(this[i]));
	}

	return output
}

console.log(radius.calculate1(area));





