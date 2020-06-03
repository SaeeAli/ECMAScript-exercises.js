// The destructuring assignment syntax is a JavaScript expression that makes it possible
//  to unpack values from arrays, or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// Array destructuring

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// more example

var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20
or

[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]


// Object destructuring

const user = {id: 42, is_verified: true};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true 

// more example

({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20
or

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}