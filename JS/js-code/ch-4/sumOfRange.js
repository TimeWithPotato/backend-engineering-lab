const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the start: ", input1 => {
    r1.question("Enter the end: ", input2 => {
        r1.question("Enter the step: ", input3 => {
            let start = Number(input1), end = Number(input2), step = Number(input3);
        
            function sum(...numbers) {
                let total = 0;
                for (let number of numbers) {
                    total += number;
                }

                return total;
            }

            function range(start, end, step = 1) {
                let arr = [];
                if (step >= 0) {
                    while (start <= end) {
                    arr.push(start);
                    start += step;
                    }
                } else if (step < 0) {
                    while (end <= start) {
                        arr.push(start);
                        start += step;
                    }
                } 

                return arr;
            }

            let arr = range(start, end, step);
            let sum1 = sum(...arr);
            console.log("Array is: " + arr);
            console.log("Sum is: " + sum1);

            r1.close();
        })
    })
})