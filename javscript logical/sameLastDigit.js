// check number same last digit
let a = prompt("enter a value");
let b = prompt("enter b value");
let c = prompt("enter c value");

var res1 = a % 10;
var res2 = b % 10;
var res3 = c % 10;

if (res1 === res2 && res1 === res3) {
  console.log(`${a},${b},${c} are last same number`);
} else {
  console.log(`${a},${b},${c} are not last same number`);
}

// exersice

let num1 = 28
let num2 = 38
let num3 = 49

let result1 = num1%10 
let result2 = num2%10
let result3 = num3%10
if (result1===result2 && result1===result3) {
  console.log(`${num1},${num2},${num3} are same last number`)
}else{
  console.log(`${num1},${num2},${num3} are not same last number`)
}