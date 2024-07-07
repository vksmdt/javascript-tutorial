// print table any number

function tbl(val) {
  for (let index = 1; index <= 10; index++) {
    let table = index * val;
    console.log(`${val} * ${index} = ${table}`);
  }
}

let number = 5;
tbl(number);
