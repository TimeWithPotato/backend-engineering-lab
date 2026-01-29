const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("Enter width: ", (input1) => {
    r1.question("Enter height: ", (input2) => {
        let width = Number(input1);
        let height = Number(input2);

        for (let i = 1; i <= height; i++){
            let hashtag = "";
            for (let j = 1; j <= width; j++){
                if (i % 2 == 0 && j % 2 == 0) {
                    hashtag += " ";
                }
                else if (i % 2 == 0 && j % 2 != 0) {
                    hashtag += "#";
                }
                else if (i % 2 != 0 && j % 2 != 0) {
                    hashtag += " ";
                } else if (i % 2 != 0 && j % 2 == 0) {
                    hashtag += "#";
                }
            }
            console.log(hashtag);
        }
        r1.close();
    })
})
