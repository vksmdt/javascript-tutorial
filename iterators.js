let a = [
  "apple",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
  "mango",
  "banana",
];
let b = a[Symbol.iterator]();
// b.next()

// print direct value
// document.write(b.next().value)

// check property ... done property
// console.log(b.next().done)

// using while loop in  itrater all value print
let result = b.next();
while (!result.done) {
  console.log(result.value);

  result = b.next();
}

// string example using itrater
let nam = "vikas moodoiya";
let sd = nam[Symbol.iterator]();
// console.log(sd.next().value)
// using for of loop same work
let nms = "vikas moodotiya";
for (const iterator of nms) {
  console.log(iterator);
}

// using own itrater function
function numitrater(arr) {
  var nextnum = 0;
  return {
    next() {
      if (nextnum < arr.length) {
        return {
          value: arr[nextnum++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}
let numbr = [200, 300, 400];
let rslt = numitrater(numbr);
console.log(rslt.next())
console.log(rslt.next())
console.log(rslt.next())
console.log(rslt.next())