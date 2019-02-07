n=prompt();
a=[];
for(var i=0;i<n;i++)
{
  a[i]=Number(prompt());
}
console.log("before swap"+a);
var i=0,j=n-1;
while(i<j)
   {
     console.log("before swap"+a[i]+a[j])
     a[i] = a[i]^a[j];
     a[j] = a[i]^a[j];
     a[i] = a[i]^a[j];
     console.log("after swap"+a[i]+a[j]);
     i++;
     j--;
   }
console.log(a);
