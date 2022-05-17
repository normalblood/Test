//=>a/b 2 b/a
var a=10;
var b=20;
var c=a;
a=b;
b=c;
console.log(a,b);

//=>e/f 2 f/e
var e=10;
var f=20;
e=e+f
f=e-f;
e=e-f;
console.log(e,f);
//=>g/h 2 h/g
var g=10;
var h=20;
[g,h]=[h,g];
console.log(g,h);