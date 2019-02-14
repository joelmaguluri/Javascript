function plusMinus(arr) {
    var i = 0,min_count=0,zero_count=0,plus_count=0;
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            min_count = min_count + 1;
        }
        else if (arr[i] > 0)
            plus_count = plus_count + 1;
        else
            zero_count = zero_count + 1;
    } 
    console.log(plus_count / arr.length);
    console.log(min_count / arr.length);
    console.log(zero_count / arr.length);
}
arr=[1,2,3];
plusMinus(arr);