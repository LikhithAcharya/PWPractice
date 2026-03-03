let x=10, y=20;

console.log('Sum:', x + y);  
console.log('Difference:', y - x);
console.log('Product:', x * y);  
console.log('Quotient:', y / x);  
console.log('Remainder:', y % x);
console.log('Exponentiation:', x ** 2); 
console.log('Increment x:', ++x);
console.log('Decrement y:', --y);

console.log('x greater than y:', x > y);
console.log('x less than y:', x < y);
console.log('x equal to y:', x == y);
console.log('x not equal to y:', x != y);
console.log('x greater than or equal to y:', x >= y);
console.log('x less than or equal to y:', x <= y);

console.log('x strictly equal to y:', x === y);
console.log('x strictly not equal to y:', x !== y);

console.log('x AND y:', x && y);
console.log('x OR y:', x || y);
console.log('NOT x:', !x);

console.log('x bitwise AND y:', x & y);
console.log('x bitwise OR y:', x | y);
console.log('x bitwise XOR y:', x ^ y);
console.log('x left shift by 2:', x << 2);
console.log('y right shift by 2:', y >> 2);
console.log('y unsigned right shift by 2:', y >>> 2);

if (x%2 === 0) {
  console.log('x is even');
} else {
  console.log('x is odd');
}


switch (x > y) {  
  case true:
    console.log('x is greater than y');    break; 
    case false:
    console.log('x is not greater than y');  break;      
    default:console.log('Unexpected case');   

}  
   
function testOperators(a, b)    {  
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
    remainder: a % b,
    exponentiation: a ** b
  }; 
}   

console.log('Test Operators Function:', testOperators(5, 3));  