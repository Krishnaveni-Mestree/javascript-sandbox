
//sol 1:
// let x= Math.floor(Math.random()*100+1)

// let y= Math.floor(Math.random()*50+1)

// console.log(`x=${x},y=${y} sumOutput=${x+y}`)
// console.log(`x=${x},y=${y} differenceOutput=${x-y}`)
// console.log(`x=${x},y=${y} productOutput=${x*y}`)
// console.log(`x=${x},y=${y} quotientOutput=${x/y}`)
// console.log(`x=${x},y=${y} rmOutput=${x%y}`)

//sol 2:

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);