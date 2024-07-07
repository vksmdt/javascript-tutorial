// fetch json and text data via fetch function
let aar = [];
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    for (const key in data) {
        
            const element = `${data[key].name} - ${data[key].email} - ${data[key].address.city} `;
            // console.log(element)
            
    
    }
})

.catch(error => console.log(error))


// example 1
fetch('fetchTxt.txt').then((response)=>{
   return response.text()
}).then((data)=>{
    // console.log(data)
 }).catch((error)=>{
    console.log('cant fetch data')
})


// example 2
fetch("http://localhost:4000/products")
.then((response) => response.json())
.then((data) => {
  console.log(data)
  for (const key in data) {
        
            const element = `Name : ${data} <br>`;
            console.log(element)
            document.write(element)
            
    
    }
})

.catch(error => console.log(error))

// get put delete post , save data in server

fetch('http://localhost:4000/products')
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
     
        
        console.log(data.key);
        
   
    }
  }
      
  );

// fetch api excerise
// function getdata() {
//   fetch('fetchTxt.txt').then((response)=>{
//     return response.text()
//   }).then((data)=>{
//     console.log(data)
//   })
  
// }

// getdata();





// excersise

// let = fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((data)=>
// {
//   for (const key in data) {
//     const elem = data[key].title
//     console.log(elem)

//   }
// })
// .catch((err)=>{
//   console.log(err)
// })