// rest oprataor
function sum(name, ...arg) {
console.log(`hello ${name} `)
  document.write(`hello ${name} : `);
  let sum = 0;
  for (let i in arg) {
    sum += arg[i];
  }
  document.write(sum)
  console.log(sum)
}

sum("vikas",25,26,24,27,9,8,98,89);


// spred oprataor

function vikas(vikku,...args) {
  console.log(`${vikku}`)
  let vikas = 0;
  for (let i in args) {
    vikas += args[i];
  }

  console.log(vikas)
  
}
let arr = [25,26,28,27]
vikas('moodotiya ji',...arr)

// cloaning array spred oprator
let asr = [25,36,9,8,78]
let asr2 = [...asr]
asr.push(50)

console.log(asr2)
console.log(asr)
// convert array
let arrs = [1,2,3,4,5,6]
console.log(...arrs) //spred 
console.log([...arrs])//convert array

//concate array spred oprate
let arr3 = [25,...arr,...arrs,26] //another value add
console.log(arr3)



//merge object
let a = {
  name:'vikas',

}
let ab = {
 
  age : 28
}
let merg = {...a,...ab}
console.log(merg)

// excrsice

function pratyush(name,...smt) {
  console.log(arguments) // argument is predefine function in javascript
  console.log(name)
  let s = 0;
  for (const i in smt) {
    s+=  smt[i]
  }
  console.log(s)
}
pratyush('vikas',25,36,97,24)