console.log("")
console.log("Learning13 - map, filter, reduce");
console.log("")

const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - [101, 001, 011, 010, 110]


// Map

function double(x) {
	return x * 2
}

function triple(x) {
	return x * 3
}

function binary(x) {
	return x.toString(2);
}

const outputDouble = arr.map(double);

console.log(outputDouble);

const outputTriple = arr.map(triple);

console.log(outputTriple);

const outputBinary = arr.map(binary);

console.log(outputBinary);


// We can also call the map function as below

const outputDouble1 = arr.map(function double(x) {
	return x * 2
});

console.log(outputDouble1);


// We can also write arrow function as below

const outputDouble2 = arr.map((x) => {
	return x * 3
});

console.log(outputDouble2);


// We can also shorten it further as below

const outputDouble3 = arr.map((x) => x * 4);

console.log(outputDouble3);



// Filter

// Filter odd values

function isOdd(x) {
	return x % 2;
}

const outputFilter1 = arr.filter(isOdd);
console.log(outputFilter1);

// Filter odd values

function isEven(x) {
	return x % 2 === 0;
}

const outputFilter2 = arr.filter(isEven);
console.log(outputFilter2);


// Filter greater than 4

function greaterThan4(x) {
	return x > 4;
}

const outputFilter3 = arr.filter(greaterThan4);
console.log(outputFilter3);


const outputFilter4 = arr.filter((x) => x > 5);
console.log(outputFilter4);

const outputFilter5 = arr.filter((x) => {
	return x > 2;
});
console.log(outputFilter5);


// Reduce

// Finding Sum

function findSum(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

console.log(findSum(arr));

const outputReduce1 = arr.reduce(function (accum, curr) {
	accum = accum + curr;
	return accum;
}, 10);

console.log(outputReduce1);



// Finding Maximum

function findMax(arr) {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

console.log(findMax(arr));

const outputReduce2 = arr.reduce(function (max, curr) {
	if(max < curr) {
		max = curr;
	}
	return max;
}, 0);

console.log(outputReduce2);


const users = [
				{firstName: "Krishna", lastName: "Puranik", age: 37},
				{firstName: "Srishti", lastName: "Puranik", age: 4},
				{firstName: "Shilpa", lastName: "Puranik", age: 33},
				{firstName: "Shilpa", lastName: "Puranik", age: 33},
				];

const outputMap1 = users.map(x => x.firstName + " " + x.lastName);

console.log(outputMap1);


const outputReduce3 = users.reduce(function (accum, curr) {
	if(accum[curr.age]) {
		accum[curr.age] = accum[curr.age] + 1;
	} else {
		accum[curr.age] = 1;
	}

	return accum;
}, {})


console.log(outputReduce3);


console.log("Using filter and map");
const outputFilter6 = users.filter(x => x.age < 35).map(x => x.firstName);

console.log(outputFilter6);


console.log("Using reduce");
const outputReduce4 = users.reduce(function(accum, curr) {
	if(curr.age < 35) {
		accum.push(curr.firstName);
	}
	return accum;
}, []);

console.log(outputReduce4);






















