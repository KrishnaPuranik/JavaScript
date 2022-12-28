console.log("")
console.log("Learning02 - undefined and not defined in JS");
console.log("")



getName();
console.log(x);
console.log(getName);
getName1;
getName2;


var x = 7;

function getName() {
    console.log("Krishna!!!");
}

var getName1 = () => {
    console.log("Krishna!!!");
}

var getName2 = function () {
    console.log("Krishna!!!");
}

getName();
console.log(x);
console.log(getName);
getName1();
getName2();

var y = 1;

a();
b();
console.log(y);

function a() {
    var y = 10;
    console.log(y);
}

function b() {
    // var y = 100;
    console.log(y);
}

console.log("Initialize z")
var z;
console.log(z)

if(z === undefined) {
    console.log("z is undefined")
} else {
    console.log("z is not undefined");
}

console.log("Assign 20 to z")
z = 20


if(z === undefined) {
    console.log("z is undefined")
} else {
    console.log("z is not undefined");
}

console.log("Initialize variable abc")
var abc;
console.log(abc)
console.log("Assign integer to abc")
abc = 25;
console.log(abc)
console.log("Assign string to abc")
abc = "Krishna";
console.log(abc)
console.log("Assign boolean to abc")
abc = true;
console.log(abc)




















