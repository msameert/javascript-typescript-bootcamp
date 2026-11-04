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

// dictionaries in array
const studentss = [
    {
        id: 1,
        name: "Ali",
        marks: 85
    },
    {
        id: 2,
        name: "Ahmed",
        marks: 45
    },
    {
        id: 3,
        name: "Sameer",
        marks: 92
    }
];

// access individual record

console.log(students[0].name);

// get all student names
studentss.forEach(student => {
    console.log(student.name);
});

// Destructuring lets you extract values from arrays or objects into variables.
const { name, age, cgpa } = studentss[0];

console.log(name);
console.log(age);
console.log(cgpa);

// Rest parameters (...args)
function calculateTotal(...numbers) {

    return numbers.reduce((total, num) => total + num, 0);

}

console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(5, 10, 15, 20, 40));

// summing up 
const studentz = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 45 },
    { name: "Sameer", marks: 92 },
    { name: "Usman", marks: 67 }
];

// Get passed students
const passsed = studentz.filter(student => student.marks >= 50);

// Calculate average
const total = studentz.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

const average = total / studentz.length;

// Display results
console.log("All Students:");

studentz.forEach(student => {
    console.log(`${student.name}: ${student.marks}`);
});

console.log("Passed Students:", passed);
console.log("Average Marks:", average);