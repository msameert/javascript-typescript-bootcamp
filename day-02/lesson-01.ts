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

// === Optional parameters ===
// What if a function doesn't always need every parameter?

function studentss(name: string, age?: number, dep?: string): void {
    if (dep) {
        console.log(`Hello ${name} from ${dep}`);
    } else {
        console.log(`Hello ${name}`);
    }
};

studentss("Sameer", 23);

studentss("Ali");

// === Interface === a.k.a blueprints

interface classmate {
    readonly id: number;  // readonly never lets changing the property again once the object is created
    name: string;
    age?: number;   // ? makes it optional
}

const student1: classmate = {

    id: 1,
    name: "Ali",
    age: 21
};

// extend the interface
interface User {

    id: number;
    name: string;
    email: string;

}

interface Student extends User {  // extending

    cgpa: number;
    department: string;

}

interface Teacher extends User {

    salary: number;
    subject: string;

}

// ===type aliases ===
type Role = "admin" | "student" | "teacher";

let userRole: Role = "admin";

userRole = "student"; // Allowed

// but if userRole = "manager"; // it will give Error

// ==== An intersection combines multiple types into one.
type Users = {

    id: number;
    name: string;

};

type Students = {

    cgpa: number;
    department: string;

};

type UniversityStudent = Users & Students;

// Now UniversityStudent requires all four properties.
const student12: UniversityStudent = {

    id: 1,
    name: "Ali",
    cgpa: 3.5,
    department: "Software Engineering"

};