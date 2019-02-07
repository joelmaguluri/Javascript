function q(a)
{
a=Number(a);
a1=a & 0xAAAAAAAA
a2=a | 0x55555555
a1=a1>>1
a2=a2<<1
return a1^a2
}
