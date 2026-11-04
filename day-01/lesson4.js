// === professional methods ===

// try and catch for error handling
try {

    let result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("Something went wrong:", error.message);

}


// === async, await for promises handling ====
//• JavaScript is built for web browsers where the screen cannot freeze, so it is async by default and needs async/await to pause.
//• Python is built for data and scripting, so it freezes and waits by default. You only use async/await in Python if you are building high-performance systems that need to do a million things at once.
// In coding, a Promise is just a placeholder token for data that takes a little bit of time to arrive (like downloading a picture or fetching user data from the internet).
async function getUsers() {   // • async : When you put async in front of a function, you are telling the computer: "Hey, inside this room, things are going to take some time. We are baking here!"

    const response = await fetch(                   // await (The Ultimate Patience): When you put await in front of a promise, you freeze like a statue. You freeze time and wait patiently right at that line of code until the cookie is ready. Once the cookie arrives, you unfreeze and move to the next line.
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

}

getUsers();

// a mistake is assuming that fetch() automatically throws an error when an API returns HTTP 404 or 500.
// error handling 
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("API request failed:", error.message);

    }

}

getUsers();

// POST method ====
async function registerStudent() {

    const student = {
        name: "Sameer",
        department: "Software Engineering",
        cgpa: 3.4
    };

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        const result = await response.json();

        console.log("Registered:", result);

    } catch (error) {

        console.log(error.message);

    }

}

registerStudent();

// === fetching backend in JS - applied await at every function it moves one by one
const student = await getStudent();
const grades = await getGrades();
const attendance = await getAttendance();

// the professional way - it fetches all at same time instead of waiting one by one
const [students, gradess, attendancee] = await Promise.all([
    getStudent(),
    getGrades(),
    getAttendance()
]);