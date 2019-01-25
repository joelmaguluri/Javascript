function is_prime(a)
{
  var i=0;
  for(i=0;i<a.length;i++)
  {
    if(a[i]<=5)
     {
      if(i!=1&&i!=4)
      {
       console.log(a[i]);
      }
     }
   else
   {
   if((a[i]-1)%6==0||(a[i]+1)%6==0)
    console.log(a[i]);
   }
 }
}
var a=[23,57,79,91,111];
is_prime(a);
