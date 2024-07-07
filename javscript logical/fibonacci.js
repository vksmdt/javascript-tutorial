// print fibonacci series
let a = 0;
let b = 1;
for (let index = 0; index < 10; index++) {
  let temp = a + b; // 1+1 // 2
  a = b; // 1 = 1
  b = temp; // 1 =1
  console.log(temp);
}
