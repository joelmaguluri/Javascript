function check_greatest(a,b,c)
{
     if(a>b&&a>c)
      { 
        return a;
      }
    else if(b>c)
      {
        return b;
      }
    else 
        return c;
}
console.log(check_greatest(123,778,9000));