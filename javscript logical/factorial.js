// print factorial number

function factorialNum(num) {
    if (num < 0) {
      return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return num * factorialNum(num - 1);
    }
  }
  let a = factorialNum(4);
  console.log(a);
  
  // example factorial
  var number = 50;
  var fact = 1;
  if (number < 0) {
    console.log("factorial number nagative not possible");
  } else if (number == 0) {
    console.log(`the factorial is ${number} is 1`);
  } else {
    for (let index = 1; index <= number; index++) {
      fact = fact * index;
    }
    console.log(`the factorial of ${number} is ${fact}`);
  }

  
//factorial number print with for loop

var numb = 5;
var fac = 1;

for (let index = 1; index <= numb; index++) {
  
    fac = fac * index;
   
}
console.log(fac)

//recursion function factorial number print

let nm = 5
var ft = 1;
function fctrl(n) {
  if (n > nm) {
    return ;
  }
  ft = ft * n;
 
  n++;
  fctrl(n)

}

fctrl(1)
console.log(ft)

let mk = [1,2,3,4,5]
var sum = 0
for (let index = 0; index < mk.length; index++) {
   sum += mk[index]
  
}
console.log(sum)