console.log("Bismillah")

let username: string = "Sameer";
let age: number = 23;
let cgpa: number = 3.4;
let isStudent: boolean = true;

console.log(username);
console.log(age);
console.log(cgpa);
console.log(isStudent);

let marks: number[] = [80, 75, 90, 85];

let students: Array<string> = [
    "Ali",
    "Ahmed",
    "Sara"
];

let student: {
    name: string;
    age: number;
    cgpa: number;
};

student = {
    name: "Sameer",
    age: 21,
    cgpa: 3.4
};

let studentId: number | string = 101;

studentId = "STU-101"; // Allowed

studentId = 101; // Allowed
//The | symbol means OR.

// ===Functions ===
// syntax :

//    function functionName(): returnType {
//    code...
//    }

function calculateTotal(price: number, quantity: number): number {    //this :number is returntype that returns number

    return price * quantity;

}
// Optional parameters
// What if a function doesn't always need every parameter?

function studentss(name: string, age: number, dep?: string): void {
    if (dep) {
        console.log(`Hello ${name} from ${dep}`);
    } else {
        console.log(`Hello ${name}`);
    }
};