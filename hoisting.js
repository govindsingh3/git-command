//Hoisting with var gives undefined 
/*console.log(x);
var x=5;
console.log(x);//output undefined and 5
*/

//Hoisting with let and cons give error while compiling the code
/*console.log(x);
let x=5;
console.log(x); //It gives reference error 
*/

//Hoisting with FUNCTIONs
hello();
function hello(){
    console.log("Hello, world!");
}