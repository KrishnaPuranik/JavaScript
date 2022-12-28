console.log("")
console.log("Learning09 - Callback Functions in JS");
console.log("")


// What is a Callback function in JavaScript
// A function sent as argument to a function, and that function will call the sent function, in a later point in time.

setTimeout(function () {
	console.log("Timer Called")
}, 6000);

function x(y) {
	console.log("x");
	y();
}

x(function y() {
	console.log("y");
});

	// JavaScript has only on call stack, everything goes through this call stack. It is also called main thread.

// JavaScript is a synchronous and single-threaded language


// Blocking the main thread


// Power of Callbacks?


// Deep about Event listeners


// Closures Demo with Event Listeners


// Scope Demo with Event Listeners


// Garbage Collection and removeEventListeners


function attachEventListener() {
	let count = 0;
	var clickMebut = document.getElementById("clickMe")
	if(clickMebut) {
		clickMebut.addEventListener("click", function buttonClick() {
		console.log("Super! Button Clicked...", ++count)
	}) 
	} else {
		console.log("No such button");
	}
}

attachEventListener();

