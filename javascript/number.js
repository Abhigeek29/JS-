// defining number in js
const score = 400 
//M2
const balance = new Number(100);

console.log(score);
console.log(balance);
// output
// 400
//[Number: 100]

console.log(balance.toFixed(2)); // to set precision value

// to precison value decimal ke starting se dekhta hai

const other = 123.8890
console.log(other.toPrecision(4));  // agar value 3 dedi toh 124 kardega


//comma's lagana 

const value = 10000000
console.log(value.toLocaleString()); 



