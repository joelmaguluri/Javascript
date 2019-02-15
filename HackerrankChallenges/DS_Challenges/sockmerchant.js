'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var pairs = {};
    var count = 0;
    for (var i = 0; i < n; i++)
    {

        if (pairs[ar[i]] == undefined)
            pairs[ar[i]] = 1;
        else
            pairs[ar[i]]++;
    }
    var keys = Object.keys(pairs);
    for (var i = 0; i < keys.length; i++) {
        var temp = pairs[keys[i]];
        if (temp % 2 == 0)
        {
            count=count+(temp/2);
        }
        else
        {
            count = count + (temp - 1) / 2;

        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

