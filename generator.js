// generator
function *generatorit() {
 
    yield'yield no 1'
    yield'yield no 2'
    yield'yield no 3'
  
}

let f = generatorit()
 // value print karna
// console.log(f.next().value)
// console.log(f.next())
// console.log(f.next())

// all value print generator
for (const iterator of f) {
 console.log(iterator)   
}

// incriment value generator function
function *vks() {
 let num = 300
 while (true) {
   yield(num++)
 }
    
  
}
let d = vks()
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)

// set yield value in function

function *ad() {
    
       let result = (yield)*10; //multipication
    //    let result = yield;

       console.log(`result:${result}`)
     
   }
   let dd = ad()
   dd.next()
   dd.next(500)

  // multiple value send yield with array
function *bn() {
    
    let result = [yield,yield,yield] //multipication
 //    let result = yield;

    console.log(`result:${result}`)
  
}
let gh = bn()
gh.next()
gh.next(500)
gh.next(600)
gh.next(700)


