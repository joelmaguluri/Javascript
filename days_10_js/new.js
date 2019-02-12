'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
class rectangle {
    constructor() {
        this.length = a;
        this.width = b;
        this.area = a * b;
        this.perimeter = 2 * (a + b);
    }
}
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    let rect = rectangle(a, b);
    console.log(rect.length);
    console.log(rect.width);
    console.log(rect.area);
    console.log(rect.perimeter);
}


