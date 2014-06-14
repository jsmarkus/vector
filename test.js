var V = require('./vector');

var a = new V(1, 2);
var b = new V(2, 3);

var c = a.clone().add(b);
console.log(a, b, c);
c.normal();
console.log(c);

console.log(new V(10, 10).scale(20));

var one = new V(1, 1);
var two = new V(0, 0);
console.time('addition');
for (var i = 0; i < 1000000; i++) {
	two.add(one);
}
console.timeEnd('addition');
console.log(two);