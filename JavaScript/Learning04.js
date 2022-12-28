console.log("")
console.log("Learning04 - Block Scope and Shadowing in JS")
console.log("")

if(true) true;

if(true) {
	var a = 10;
	console.log()
}

if(true)
	console.log("True Statement")
else 
	console.log("False Statement")

// Block

	{
		var item1 = 1000; // item1 will be in Global scope. Since it is var
		let item2 = 2000; // item2 will be in Block scope.
		const item3 = 3000; // item3 will be in Block scope. This is hoisted in Block scope. They are stored in seperate memory space.

		console.log(item1)
		console.log(item2)
		console.log(item3)
	}

	console.log(item1)
	// console.log(item2)
	// console.log(item3)


// Shadowing

	var d1 = 100;
	let d2 = 200;
	const d3 = 300;
	{
		var d1 = 10;
		let d2 = 20;
		const d3 = 30;
		console.log(d1)
		console.log(d2)
		console.log(d3)
	}

	console.log(d1)
	console.log(d2)
	console.log(d3)


// This is illegal
let d4 = 400
{
	// var d4 = 40; // Uncaught SyntaxError: Identifier 'd4' has already been declared
	console.log(d4)
}
console.log(d4)


// This is perfectly fine, because var is function scoped.
let d5 = 500
function dd1() {
	var d5 = 40;
	console.log(d5)
}
dd1()
console.log(d5)












