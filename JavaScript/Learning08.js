console.log("")
console.log("Learning08 - Interview JavaScript")
console.log("")

a() // Function Statement: Whole function will be stored in memory creation phase, so this will print "a called". 
//b() // Function Expression: Here the function is assigned to 'b' in execution phase, so b is 'undefined', hence it will throw
	// 'Uncaught TypeError: b is not a function'


// Function Statement
// Below is called function statement.
function a() {
	console.log("a called");
}
a();

// Function Expression
var b = function () {
	console.log("b called");
}
b();

// Function Declaration
	// Function Declaration and Function Statement are one and the same.

// Anonymous Function
	// A function without a name is a Anonymous Function. Anonymous function does not have its own identity
	// This will be a syntax error. Function statement require a function name.
/*
	function () { 

	}
*/
	// Anonymous function must be used as a value. In Function Expression, anonymous function is assigned as a value.

// Named Function Expression
	// function with a name.
var c = function xyz() { 
	console.log("c called");
}
c();

//xyz(); - We cannot use xyz() directly, it will give ReferenceError: xyz is not defined. 
			// Actually it is not defined in Global scope, but is defined in local scope.


// Difference between Parameters and Arguments
var d = function (param1, param2) {
	console.log(param1, param2);
}
d("Argument1", "Argument2");


// First Class Functions
// The ability to use functions as values is called First Class Functions. 
// Function can be passed as arguments and returned from function, these ability is known as First Class Functions.
// Functions are First Class Citizens - It is same as First Class Functions.
var e = function (param1) {
	console.log("param1:", param1);
}
e(function () {

});

var f = function (param1) {
	console.log("param1:", param1);
	return function () {

	}
}

var g = f(function () {
	
});

console.log("g:", g)

// Arrow Functions

















