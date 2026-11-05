type Role = "admin"| "student" | "Teacher";

let UserRole : Role = "admin";  //allowed

// === Generics ===
// syntax : function functionname<T>(value : T): T {
//           return value;
//           }
function getValue<T>(value: T): T {

    return value;

}

const name = getValue<string>("Sameer");

const age = getValue<number>(21);

const isStudent = getValue<boolean>(true);

// here TS will remember the Datatype unlike the 'any' which doesn't hold the data type - TS won't help with bugs since it doesn't know the data type 
// you can also go for :
const names = getValue("Sameer");
const ages = getValue(21);    // not defining the data typpe - TS will understand it 

// === Generics with arrays 
function getFirstItem<T>(items: T[]) {

   return items[0];

}

const studentNames = ["Ali", "Ahmed", "Sara"];

const firstStudent = getFirstItem(studentNames);

console.log(firstStudent);   // here the TS knows the array is string

// === Multiple Generic Parameters ===
function multiples<T, U>(firstparameter: T, secondparameter: U): [T, U] {
    return [firstparameter, secondparameter];
}
const student = multiples<string, number>("Ali", 101);
// T represents string, U represents number

// ==== example with interface generic ====
interface ApiResponse<T> {

    success: boolean;
    data: T;
    message: string;

}                           // common in api development
interface Student {

    id: number;
    name: string;
    cgpa: number;

}

const studentsResponse: ApiResponse<Student[]> = {
    success: true,

    data: [
        { id: 1, name: "Ali", cgpa: 3.5 },
        { id: 2, name: "Sara", cgpa: 3.8 }
    ],

    message: "Students fetched successfully"
};