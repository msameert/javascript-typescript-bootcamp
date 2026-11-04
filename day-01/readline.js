const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Enter your name: ", function(name) {
    console.log(`Welcome ${name}!`);

    r1.close();
});