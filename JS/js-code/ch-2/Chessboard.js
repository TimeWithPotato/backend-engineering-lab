let defaultHashtag = "# # # #";
for (let i = 1; i <= 8; i++){
    let dummyHash = "";
    switch (true) {
        case i % 2 != 0:
            dummyHash = " " + defaultHashtag;
            console.log(dummyHash);
            break;
        case i % 2 == 0:
            dummyHash = defaultHashtag + " ";
            console.log(dummyHash);
            break;
    }
            
}