const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter with spaces: ", input1 => {
    let arrStr = input1.split(" ");
    let arr=[]
    for (let ch of arrStr) {
        arr.push(Number(ch));
    }

    function reverseArray(...numbers) {
        let arr = [];
        for (let i = numbers.length - 1; i >= 0; i--){
            arr.push(numbers[i]);
        }
        return arr;
    }

    function reverseArrayInplace(numbers) {
        for (let i = 0; i < Math.floor(numbers.length / 2); i++){
            let old = numbers[i];
            numbers[i] = numbers[numbers.length - 1 - i];
            numbers[numbers.length - 1 - i] = old;
        }
    }
    console.log(`ReverseArray: ${reverseArray(...arr)}`);
    reverseArrayInplace(arr);
    console.log("ReverseArrayInplace: " + arr);
    r1.close();
})