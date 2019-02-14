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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    if (s.includes('PM'))
    {
      if(s.includes('12'))
      {
          var index = s.indexOf('PM');
           return s.slice(0,index);
      }
      else
      {
          var num = Number(s.slice(0, 2));
          num = num + 12;
          var index = s.indexOf('PM');
          return num+s.slice(2, index);
      }
    }
    else
    {
        if (s.includes('12'))
        {
           var index = s.indexOf('AM');
           return '00' + s.slice(2, index);
        
        }
        else
        {
            var index = s.indexOf('AM');
            return s.slice(0, index);
        }
      

    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

