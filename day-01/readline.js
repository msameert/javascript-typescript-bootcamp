const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [];

function registerStudent() {

    rl.question("Enter student name: ", (name) => {

        rl.question("Enter student ID: ", (id) => {

            rl.question("Enter department: ", (department) => {

                rl.question("Enter marks: ", (marks) => {

                    const student = {
                        name: name,
                        id: Number(id),
                        department: department,
                        marks: Number(marks)
                    };

                    students.push(student);

                    console.log("\nStudent registered successfully!\n");

                    rl.question("Register another student? (yes/no): ", (answer) => {

                        if (answer.toLowerCase() === "yes") {
                            registerStudent();
                        } else {
                            displayStudents();
                            rl.close();
                        }

                    });

                });

            });

        });

    });

}

function displayStudents() {

    console.log("\n========== REGISTERED STUDENTS ==========\n");

    students.forEach((student, index) => {

        console.log(`Student ${index + 1}`);
        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Department: ${student.department}`);
        console.log(`Marks: ${student.marks}`);
        console.log("--------------------------------");

    });

    console.log(`Total Students: ${students.length}`);
}

registerStudent();