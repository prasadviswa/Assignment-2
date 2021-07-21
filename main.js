const readline = require("readline");
const fs= require("fs");
const case1 = require("./case_one");
const case2 = require("./case_two");
const case3 = require("./case_three");
const case4 = require("./case_four");
const case5 = require("./case_five");
const case6 = require("./case_six");
const case7 = require("./case_seven");
const case8 = require("./case_eight");
const ad = require("./add");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("\r 1. Check if the file is present or not");
console.log("\r 2. If not present create it");
console.log("\r 3. Writs some text in it");
console.log("\r 4. Display the text on screen");
console.log("\r 5. Search for a particular text and replace it with new word");
console.log("\r 6. Write it back on file");
console.log("\r 7. Display again on the screen");
console.log("\r 8. If the file with text written is already present then append text to next line");



rl.question("\nChoose any of the following options bellow ?\n\n", function(option) {
    console.log(`You have selected '${option}' option.\n`);


    
    switch (option) {
        
        case '1':
            case1.c1("file.txt");
            break;
        case '2':
            case2.c2();
            break;
        case '3':
            case3.c3();
            break;
        case '4':
            case4.c4();
            break;
        case '5':
            case5.c5();
            break;
        case '6':
            case6.c6();
            break;
        case '7':
            case7.c7();
            break;
        case '8':
            case8.c8();
            break;
        case '9':
            ad();
            break;

        default:
            console.log("default");
            break;
    }

    rl.close();
});
