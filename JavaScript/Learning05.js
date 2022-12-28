console.log("")
console.log("Learning05 - Closure")
console.log("")



// Closure

function m() {
	var m1 = 500;
	function n() {
		var n1 = 10;
		function p() {
			console.log(m1, n1);
		}
		p()
	}
	n()
}
m()


// Assigning function to a variable
function m() {
	var m1 = 500;
	function n() {
		// We can assign a fuction to a variable
		var n1 = function p() {
			console.log(m1, n1);
		};
		function p() {
			console.log(m1, n1);
		}
		p()
	}
	n()
}
m()


// Send function as parameter
function m() {
	var m1 = 500;
	function n() {
		// We can assign a fuction to a variable
		var n1 = function p() {
			console.log(m1, n1);
		};		
	}
	n(function p() {
			console.log(m1, n1);
		})
}
m()


// We can return a function
function m() {
	var m1 = 500;
	function n() {
		var n1 = 10;
		function p() {
			console.log(m1, n1);
		}
		return p;
	}
	n()
}
m()

function x() {
	var a = 7;
	function y() {
		console.log(a)
	}
	a = 100;
	return y;
}

var funcY = x();
console.log("funcY: ", funcY);


funcY()


function x() {
	var a = 7;
	return function y() {
		console.log(a)
	}
	a = 100;
}

var funcY = x();
console.log("funcY: ", funcY);


funcY()

