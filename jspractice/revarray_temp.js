var a=[1,2,3,8,7];
var b=[];
var j=0;
for(var i=a.length-1;i>=0;i--)
{
  b[j]=a[i];
  j++;
}
a=[];
a=b;
console.log(a)