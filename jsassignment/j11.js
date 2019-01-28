function add(arr1,arr2)
{
  var rows=arr1[0];
  var colums=rows;
  var temp=arr1;
  for(var i=0;i<rows;i++)
  {
   for(var j=0;j<colums;j++)
   {
     arr1[i][j]=arr1[i][j]+arr2[i][j]
     console.log(+i+j+arr1[i][j]+arr2[i][j]);
   }
  }
 console.log(arr1);
}

arr1=[[1,2],[3,4]];
arr2=[[5,6],[7,8]];
add(arr1,arr2);
