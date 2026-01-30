const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Enter value1: ", input1 => {
    r1.question("Enter value2: ", input2 => {
        let x = Number(input1);
        let y = Number(input2);

        const min = (x, y) => {
            return x < y ? x : y;
        };

        console.log(min(x, y));
        r1.close();
    })
})