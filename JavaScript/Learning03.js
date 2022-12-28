console.log("")
console.log("Learning03 - Let Vs Const, Temporal Dead Zone")
console.log("")

// console.log(val4); //Uncaught ReferenceError: Cannot access 'val4' before initialization
// Because its a constant, and stored in different memory space.
let val4 = 10;
console.log(val4);
var val5 = 100;

var val5 = 200;

console.log(val5);

// let val4 = 30;

let val6;
val6 = 50;
console.log(val6);

val6 = 100;
console.log(val6);

const val7 = 30;
// val7 = 31; - Uncaught TypeError: Assignment to constant variable.

// const val8; Uncaught SyntaxError: Missing initializer in const declaration