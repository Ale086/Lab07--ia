var x = 1234;

var c1 = x%10;
var c2 = parseInt(x/10)%10;
var c3 = parseInt(x/100)%10;
var c4 = parseInt(x/1000)%10;

var s = c1 + c2 + c3 + c4;

console.log("Suma cifrelor nr este: ", s);