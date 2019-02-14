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

function getLetter(s) {
    let letter;
    let n;
    // Write your code here
    if (s[0] == 'a' || s[0] == 'e' || s[0] == 'i' || s[0] == 'o' || s[0] == 'u')
        n = 1;
    else if (s[0] == 'b' || s[0] == 'c' || s[0] == 'd' || s[0] == 'f' || s[0] == 'g')
        n = 2;
    else if (s[0] == 'h' || s[0] == 'j' || s[0] == 'k' || s[0] == 'l' || s[0] == 'm')
        n = 3;
    else
        n = 4;
    switch (n)
    {
        case 1:
            letter='A';
            break;
        case 2:
            letter = 'B';
            break;
        case 3:
            letter = 'C'
            break;
        default:
            {
                letter = 'D'
                break;
            }
    }

    return letter;
}

