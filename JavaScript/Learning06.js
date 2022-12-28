// setTimeout + closures

console.log("")
console.log("Learning06 - setTimeout + Closures")
console.log("")



function x() {
	var i = 100;
	setTimeout(function () {
		console.log(i);
	}, 1000);

	console.log("Hai Krishna");
}

x();


function a() {
	for(var i = 1; i <= 5; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
	
	console.log("Hai Krishna");
}

a();


function b() {
	for(let i = 1; i <= 5; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
	
	console.log("Hai Krishna");
}

b();


function c() {
	for(var i = 1; i <= 5; i++) {
		function close(x) {
			setTimeout(function () {
				console.log(x);
			}, x * 1000);
		}
		close(i);
	}
	
	console.log("Hai Krishna");
}

c();