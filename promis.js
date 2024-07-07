//promise
// bulleAN value return

//example 1 condition check true and false

function prm(complete) {
  return new Promise(function (resolve, reject) {
    console.log("fetching data please wait");

    setTimeout(() => {
      if (complete) {
        resolve("true he ye");
      } else {
        reject("false he ye");
      }
    }, 1000);
  });
}



prm(true)
  .then((reslt) => {
    console.log(reslt);
  })
  .catch((eror) => {
    console.log(eror);
  });



function vikku (value){
  return new Promise(function(resolve,reject){
    console.log("data is loading")
    setTimeout(() => {
      if(value){
        resolve("true he ")
      }else{
        reject("false")
      }
    }, 2000);
  })
}

vikku(false).then((res)=>{
console.log(res)
}).catch((err)=>{
  console.log(err)
})
//example 2
function prom(a, b) {
  return new Promise(function (resolve, reject) {
    console.log("please wait");
    let c = a / b;
    setTimeout(() => {
      if ((a, b)) {
        resolve(`i ame succefull : ${c}`);
      } else {
        reject("i am not succefull");
      }
    }, 1000);
  });
}

// call function , method chaining
prom(5, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((erro) => {
    console.log(erro);
  });

function coount(b, c) {
  return new Promise((resolve, reject) => {
    console.log("wait a minute");
    let d = b / c;
    setTimeout(()=>{
      if(b,c){
        resolve(`success ${d}`)

      }
      else{
        reject("failed")
      }

    },1000)
  });
}

coount(10,2).then((result)=>{
  console.log(result)
}).catch((err)=>{
  console.log(err)
})



function vikas (complete){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(complete){
        resolve("this is a true")
      }else{
        reject("this is a false")
      }
    }, 1000);

  })
}

vikas(false).then((reslt)=>{
  console.log(reslt)
}).catch((err)=>{
  console.log(err)
})