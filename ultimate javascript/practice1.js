// 1 - create a variable type of stringand try to number to it
let a = "vikas";
let b = 6;
console.log(a + b); // concate string and number

// 2 - use typeof oprator to find the datatype of the string in last question
console.log(typeof (a + b));

// 3 - create a const object in javascript can you change it to hold a number later
const obj = {
  name: "vikas modotiya",
  age: 25,
};
// obj= 56   // not change in number because const is not change value

// 4 - try to add a new key to the const object in problem 3 were able to do it
obj.friend = "aditya";
console.log(obj); // const object ki key change ki ja skti he

//write a js program to create a word meaning dictionary of 5 word
const dictionary = {
  life: "Do you believe in life after death?",
  alone: "The old man lives alone.",
  love: "a mother’s love for her children",
  memory: "to have a good/bad memory",
  thunder: "a clap/crash/roll of thunder",
};

console.log(dictionary)
for (const key in dictionary) {
   
        const element = dictionary[key];
        document.write(element + '</br>')

}