'use strict';

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

// Complete the staircase function below.
function staircase(n) {
    for (var i = 1; i <=n; i++)
    {
        var str = '';
        var temp = n - i;
        for (var j = 1; j <= temp; j++)
        {
          
            str = str + ' ';

        }
        for (var j = temp+1; j <= n; j++) {

            str = str + '#';

        }

        console.log(str);

    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

