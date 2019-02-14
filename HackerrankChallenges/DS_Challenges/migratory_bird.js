'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
   var count = {};
    for (var i = 0; i < arr.length; i++)
    {
        if (count[Number(arr[i])] == undefined)
            count[Number(arr[i])]=1;
        else
            count[Number(arr[i])]++;
    }
    var keys = Object.getOwnPropertyNames(count).sort();
    var index = keys[0];
    for (i = 1; i < keys.length; i++)
    {
        if (count[index] <= count[keys[i]])
        {
            if (count[index] == count[keys[i]])
            {
                if (keys[i] < index)
                    index = keys[i];
            }
            else
            {
                index = keys[i];

            }
            
        }
    }
    return Number(index); 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}


