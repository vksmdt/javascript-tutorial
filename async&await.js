//async function
async function vikas() {
  return "hello";
}
console.log(vikas());

// await means wait krna fr dusra kaam krna
//example
async function vikasss() {
  console.log("2 : message");
  await console.log("3 : message");
  console.log("4 : message");
}

console.log("1 : message");
vikasss();
console.log("5 : message");

// new method

// async function test() {
//     return(await fetch("https://jsonplaceholder.typicode.com/users")).json()
// }
// test().then((res)=>{
//     // console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })

// example 1
async function vks() {
  return "vikas moodotiya";
}
vks()
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2
async function adi() {
  console.log("2");
  await console.log("3");
  console.log("4");
}
console.log("1");
adi();
console.log("5");

/*example 3 
async function prt() {
  // const response = await fetch("json/student_data.json")
  // const data =  await response.json()
  return (await fetch("json/student_data.json")).json();  // one line code
}
prt().then((rslt)=>{
console.log(rslt)
for (const key in rslt) {
  
    const element = `${rslt[key].name} , ${rslt[key].age}`;
    console.log(element)
    
 
}
}).catch((err)=>{
  console.log(err)
})
*/

// using error handling try and catch method
async function prt() {
  try {
    const response = await fetch("json/student_data.json");
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error);
  }
}

prt().then((rslt) => {
  console.log(rslt);
  for (const key in rslt) {
    const element = `${rslt[key].name} , ${rslt[key].age}`;
    console.log(element);
  }
});



// exercise

async function mdt() {
  // console.log('inside function')
  const response = await fetch('https://api.github.com/users')
  // console.log('before response')
  const user = await response.json();
  // console.log('user resolve')
  return user;
}
// console.log('befor calling')
let a = mdt();
// console.log('after calling')
console.log(a)
a.then((data)=>{
  return data
})
console.log('last line')


// excersis
async function sbb() 
{
  const response = await fetch('https://api.github.com/users') 
  const data = await response.json()
  return data 
}
sbb().then((res)=>{
  // console.log(res)
}) 

// exersice
async function vpa() {
  const response = await fetch('https://api.github.com/users')
  const data = await response.json();
  return data;
}
vpa().then((res)=>{
  for (const key in res) {
    
      const element = res[key].avatar_url;
      
      // console.log(element)
  }

})

// exersise
// async function vikkus() {
//   let res = await fetch('https://api.github.com/users')
//   let data = await res.json()
//   return data;
  
// }
// vikkus().then((data)=>{
//   for (const key in data) {
   
//       const element = data[key].login;
//       console.log(element)
      
    
//   }
// })