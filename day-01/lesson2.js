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

