const age = 23;

console.log(age > 18);
console.log(age < 18);
console.log(age >= 23);
console.log(age <= 23);
console.log(age === 23);
console.log(age != 18);




console.log(10 == "10");  // true
console.log(10 === "10"); // false

// == compares values after possible type conversion.
// === compares both value and type.
const hasID = true;

console.log(age >= 18 && hasID); //true 

const isAdmin = false;
const isManager = true;    

console.log(isAdmin || isManager);  // true
// Only one condition needs to be true for || to return true.

if (age > 18) {
    console.log("eligible");
} else {
    console.log("Not eligible")
}

const marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

const user = "Sameer";
const pass = "12345";

if (user === "Sameer") {
    if (pass === "12345") {
        console.log("Succesful login");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not Found");
} 

// === TERNARY CONDITION ===

// syntax Ternary: condition ? valueIfTrue : valueIfFalse;

const result = age >= 18 ? "Adult" : "Kid";

// === LOOPS ====
for (let i = 0; i < 5; i++) {
    console.log(i);  // initialization, condition, increment
}

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// UNIVERSITY LOGIC 
const students = 5;

let totalmarks = 0;

for ( i = 0; i <= students ; i++) {
    let marks = i * 15;

    totalmarks += marks;

    if (marks >= 75) {
        console.log(` student ${i} : Pass`);
    } else {
        console.log(`Student ${i} : Fail`);
    }
}  
console.log(` totalmarks : ${totalmarks}`);

// === UNIVERSITY GRADING SYSTEM =====
let markss = 67;

if (markss >= 85) {
    console.log("Grade A");
} else if (markss >= 70 && markss <= 84) {
    console.log("Grade B");
} else if (markss >= 65 && markss <= 69) {
    console.log("Grade C");
} else if (markss >= 45 && markss <= 64) {
    console.log("Grade D")
} else {
    console.log("Fails")
}

// table of 7

for (i = 1; i <= 10; i++){
    const j = 7;
    console.log(`${j}*${i} = ${j*i}`);
}

const array = [6,5,4,7,8];