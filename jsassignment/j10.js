function find_trace(arr)
{
   var rows=arr[0].length;
   var sum=0;
   for(var curr_row=0;curr_row<rows;curr_row++ )
   {
         sum=sum+arr[curr_row][curr_row];

   }
   return sum;

}
arr=[[1,2],[3,4]];
console.log(find_trace(arr));
