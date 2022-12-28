console.log("")
console.log("Learning07 - Interview Questions")
console.log("")


// function outer() {
// 	var a = 100
// 	function inner() {
// 		console.log(a);
// 	}
// 	return inner;
// }

// Putting 'var a' before return.
// function outer() {
	
// 	function inner() {
// 		console.log(a);
// 	}
// 	var a = 100
// 	return inner;
// }

// Putting 'let a' instead of 'var a'.
// function outer(b) {
	
// 	function inner() {
// 		console.log(a, b);
// 	}
// 	let a = 100
// 	return inner;
// }

// What happens if we nest outer in another function?
function outest() {
	var c = 200;
	function outer(b) {
	
		function inner() {
			console.log(a, b, c);
		}
		let a = 100
		return inner;
	}
	return outer;
}

// outer()(); // ()() means - The outer function return inner function and calling inner function.

// Or we can rewrite it as below.
var close = (outest())("Hai Krishna"); // When outest is called, it will return outer function.
close();


// If we declare 'count' in Global scope, then there is a chance for misuse.
var count = 0;

function increamentCounter() {
	count++;
}

console.log(count);


// Using closures we can acheive data hiding and encapsulation.
function counter() {
	var count = 0;

	return function increamentCounter() {
		count++;
		console.log(count);
	}
}

var counter1 = counter()
counter1();
counter1();
counter1();


var counter2 = counter()
counter2()
counter2()

counter1()
counter2()


console.log("Increment-Decrement Counter")

function Counter(){
	var count = 0;
	this.incrementCounter = function () {
		count++;
		console.log(count);
	}

	this.decrementCounter = function () {
		count--;
		console.log(count);
	}
}


var counter3 = new Counter();
counter3.incrementCounter()
counter3.incrementCounter()


counter3.decrementCounter()



















