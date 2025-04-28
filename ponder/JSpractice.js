// practice the area of a circle
const PI = 3.14;

let radius = 20;

let area;

area = (radius ** 2) * PI;

console.log(area);

// demonstration of the issue with trying to add a string and an int)
const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

// example of global scope
let globalVariable = "I'm global";

function myFunction(){
    let blockVariable = "I'm local";
    console.log(blockVariable);
}
myFunction();
console.log(globalVariable);