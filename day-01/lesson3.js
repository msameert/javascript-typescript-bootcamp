// ==FUNCTIONS ==

function add(a,b) {
    return a + b
}

const result = add(4,10);
console.log(result)

// JavaScript also allows you to store functions inside variables
 const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

// Arrow functions
const multiply = (a, b) => {
    return a * b;
};

//you can shorten it further:
const multiplyy = (a, b) => a * b;

//==ARRAYS ==
const array1 = [85, 90, 76, 60];

console.log(array1.length); // 4

// push() — Add an element at the end
const students = ["Ali", "Ahmed"];

students.push("Sameer");

console.log(students);
// for pop from end 

students.pop();

// shift() — Remove the first element
students.shift();

// forEach() Executes a function for every element.
const marks = [85, 90, 76, 60];

marks.forEach(function(mark) {
    console.log(mark);
});

// map() Creates a new array by transforming each element.

const element = [70,80,65,76];

updatedelement = element.map(element => element + 5);

console.log(updatedelement);

// filter() Returns a new array containing elements that satisfy a condition.
const markss = [85, 45, 90, 32, 76, 55];

const passed = markss.filter(mark => mark >= 50);

console.log(passed);

// object = dictionary in python 

const a = {
    name : "sameer",
    age : 23,
    cgpa : 3.4
};

// access properties 
console.log(a.name);

