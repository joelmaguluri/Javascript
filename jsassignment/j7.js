function checkvowels(a)
{
  var i=0;
  for(i=0;i<a.length;i++)
  { 
    if(a[i]=='a'||a[i]=='e'||a[i]=='o'||a[i]=='u')
     {
       console.log(a[i]+'is vowel');
    }
 }

}

checkvowels('e');
