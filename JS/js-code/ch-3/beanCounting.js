const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Enter the string: ", input => {
    r1.question("Enter the character: ", input2 => {
        let str = input;
        let ch = input2;

        const countChar = (str, ch) => {
            let c = 0;
            function countBs(ch) {
                let i = 0;
                while (i < str.length) {
                    if (str[i] == ch) c++;
                    i++;
                }
            }

            countBs(ch);
            return c;
        }

        console.log(countChar(str, ch));
        r1.close();
    })
})