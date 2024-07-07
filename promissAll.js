/* 
promissAll multiple promiss ko return krne kamm karta hai.. isme ydi ek bi promiss reject hota he to sare promiss reject ho jate he
*/

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("first");
//     resolve(10);
//   }, 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("second");
//     resolve(20);
//     // reject('reject'); // ek promis reject hua to catch function run ho jayega
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("third");
//     resolve(30);
//   }, 3000);
// });

// var total = 0;
// Promise.all([p1, p2, p3])
//   .then((result) => {
//     for (const key in result) {
//       total += result[key];
//     }
//     console.log(`Result:${result}`);
//     console.log(`Total:${total}`);
//   })
//   .catch((error) => {
//     console.log(`error:${error}`);
//   });

  // promissall ke code ko aur chota karna

  let promisscall = function(returndata, msg) {

  return function (resolve,reject) {
    setTimeout(() => {
        console.log(`${msg}`);
        resolve(returndata);
      },returndata * 100);
    
  }
  };

  let g1 = new Promise(promisscall(10 , 'first'))
  let g2 = new Promise(promisscall(20 , 'second'))
  let g3 = new Promise(promisscall(30 , 'third'))
  var total = 0;
  Promise.all([g1, g2, g3])
    .then((result) => {
      for (const key in result) {
        total += result[key];
      }
      console.log(`Result:${result}`);
      console.log(`Total:${total}`);
    })
    .catch((error) => {
      console.log(`error:${error}`);
    });