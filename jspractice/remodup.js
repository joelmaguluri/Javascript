n=prompt();
a=[];
var count={}
for(var i=0;i<n;i++)
{
  a[i]=Number(prompt());
  if(count[a[i]]==undefined)
    count[a[i]]=1;
  else
    count[a[i]]=count[a[i]]+1;
}
var cn=0;
var b=[];
for(var i=0;i<n;i++)
{
   if(count(a[i])==1)
     b[cn]=a[i];
     cn++;
}
console.log(b);
