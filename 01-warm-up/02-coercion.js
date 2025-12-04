/*
Type Coercion: JavaScript's automatic conversion of values from one data type to another
This happens when operations are performed between different data types

string + number = string concatenation
string - number = numeric operation (string converted to number)
boolean + number = numeric operation (true=1, false=0)
string * string = numeric operation (both converted to numbers)
string / string = numeric operation (both converted to numbers)
string * number = numeric operation (NaN if string can't be converted)
null + number = numeric operation (null becomes 0)
undefined + number = numeric operation (undefined becomes NaN)
array + array = string concatenation (arrays converted to strings)
array + number = string concatenation (array converted to string)
array + array = string concatenation (arrays converted to strings)
*/

console.log("'5' + 3 =", '5' + 3);
console.log("'5' - 3 =", '5' - 3);
console.log('true + 1 =', true + 1);
console.log('false + 5 =', false + 5);
console.log("'10' * '2' =", '10' * '2');
console.log("'10' / '2' =", '10' / '2');
console.log("'hello' * 2 =", 'hello' * 2);
console.log('null + 1 =', null + 1);
console.log('undefined + 1 =', undefined + 1);
console.log('[] + [] =', [] + []);
console.log('[] + 1 =', [] + 1);
console.log('[1] + [2] =', [1] + [2]);
