// types of loops 
// 1- for loo
//2- while loop
//3- do-while loop

// for loop
for (let index = 1; index <= 100; index++) {
  
    // console.log(index)
}

// while looop.
let j = 0;

while (j < 10) {
    // console.log(j+1)
    j +=1    
}

// do while loop
let k = 0;

// do {
//     // console.log(k+1)
//     k += 1
// } while (k < 10);

// breake and continue

// do {
//     if (k===5) {
  
//         break
        
//     }
//     // console.log(k + 1)
//     k += 1
// } while (k < 10);

// continue
do {
    if (k===5) {
  
        k+=1
        continue
        
    }
    // console.log(k + 1)
    k += 1
} while (k < 10);

// array foreach loop itrate
let arr = [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index < arr.length; index++) {
    
//     const element = arr[index];
//     console.log(element)
    
// }

// arr.forEach(element => {
//     // console.log(element)
    
// });
arr.forEach((element,index,array) => {
    console.log(element, index, array)
    
});



// object value itrate help of for in loop

let obj={
    name:'vikas',
    class:'mca',
    city:'neemuch',
    devloper:'javscript'
}

for (const key in obj) {
  console.log(`${key} - ${obj[key]}`)
}


// for of loop
let nms = 'vikas moodotiya';
for (const iterator of nms) {
    console.log(iterator)
    
}

let vikas =["aditya","rahul","vinu","munni"]
// console.log(vikas)
vikas.forEach(element => {
    console.log(element)
});

//arithicmatic operator
// let a = 45;
// let b = 4;
// console.log("a+b=",a+b)
// console.log("a_b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a**b=",a**b)
// console.log("=",a+b)