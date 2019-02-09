function diagonalDifference(arr) {
    var n = arr[0].length;
    var i1 = 0;
    var i2 = n - 1;
    var left_diagonal_sum = 0;
    var right_diagonal_sum = 0;
    for (var i = 0; i < n; i++)
    {
        left_diagonal_sum = left_diagonal_sum + arr[i][i1];
        right_diagonal_sum = right_diagonal_sum + arr[i][i2];
        i1 = i1 + 1;
        i2 = i2 - 1;
    }
    var temp = left_diagonal_sum - right_diagonal_sum;
    if (temp < 0)
        return -temp;
    return temp;
}
