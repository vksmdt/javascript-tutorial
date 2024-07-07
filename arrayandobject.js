console.log("array and object");

let marks = [34, 35, 39, 3, 8, 75, 89, 15];
const fruits = ["orange", "apple", "mango"];
const mixed = ["str", 25, [25, 36]];

const arr = new Array(25, 26, 24, 85);

// console.log(arr);
// console.log(fruits);
// console.log(mixed);

//array ke length naap ne ke liye
// console.log(arr.length);

//Array.isArray array ki me data check krne ke liya
// console.log(Array.isArray(arr));

// change array value
arr[0] = "vikas";

// acces array value

let accessValue = arr[0];
console.log("element:", accessValue);
// console.log(arr);

// accees index value

let vlu = marks.indexOf(89);
// console.log(vlu);

//array mutatin modifying
// array ke end me push krna
marks.push(120);
// console.log(marks);
// unshift array ke starting me push krta he
marks.unshift(170);
// console.log(marks);

// .pop se array ke end me se ek elment ko nikal lo

marks.pop();
// console.log(marks);

// .shift starting me se element ko hta deta he
marks.shift();
// console.log(marks);

//.splice starting ke array ko count krta he baad ke element ko hta deta he

marks.splice(1, 3);
// console.log(marks);

//reverse function using for revers array element

marks.reverse();
// console.log(marks);

//concate function add new array in array element

let marksss = [1, 2, 3, 4, 5, 6];
marks = marks.concat(marksss);

// console.log(marks);

//objectttttttttt

let myobj = {
  nams: "vikas",
  age: "25",
  isActive: true,
  num: [1, 2, 3, 6, 4, 5],
};
// console.log(myobj.num);
// console.log(myobj["age"]);

// object litrals esl
let name = "vikas moodotiya";
let course = "MCA";

// example 1
let objj = {
  name,
  course,
};
// console.log(objj);

//example 2

let n = "student";

let std = {
  [n + "name"]: "vikas",
  age: 25,
  vks: function () {
    return `${this.studentname}`;
  },
};
// console.log(std.vks());

// new function  obj in es6

let mdt = {
  name: "vikas moodotiya",
  "details show"() {
    return `${this.name}`;
  },
};
// console.log(mdt["details show"]());

//object return function
let fname = "vikas";
let lname = "moodotiya";
let cour = "mca";

let mk = (fname, lname, cour) =>{
  let fullname = fname + " " + lname;
  return { fullname, cour };
}
let h = mk(fname, lname, cour);
// console.log(h.fullname);



//object in js 
// const item = {
//   "herry":true,
//   name:"vikas",
//   "shubh":false,
//   "lovish":67,
//   "rohan":undefined  
// }
// for (const key in item) {
 
//     const element = item[key];
//     console.log(element)
    
 
// }


//object in js 
const cockroj = {
  rahul:"boru",
  vikas:"munni",
  aditya:"aadi",
  pratyush:"vinu"
}
// console.log(cockroj["vikas"])
for (const key in cockroj) {
  
    const element = cockroj[key];
    console.log(element)
  
}





