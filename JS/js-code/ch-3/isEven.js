const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Enter the number: ", input1 => {
    let x = Number(input1);

    function isEven(x) {
        if (x == 0) return true;
        else if (x < 0) return false;
        else return isEven(x - 2);
    }
    console.log(isEven(x));
    r1.close();
})