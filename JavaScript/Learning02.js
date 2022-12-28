console.log("")
console.log("Learning02 - The Scope Chain");
console.log("")

function a() {
	var val1 = 10;
	c();

	function c() {
		console.log("Print val1, val2, val3")
		console.log("val1: ", val1);
		console.log("val2: ", val2);
		console.log("val3: ", val3);
	}
}

var val2 = 20;
a();
var val3 = 30;