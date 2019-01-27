function swap_pebble(a)
{ 

 b=a;
 b=b<<8;
 c=a;
 c=c>>8;
 b=b|c;
 b=b&0xFFFF;
 return b;
}

console.log(swap_pebble(6500));
