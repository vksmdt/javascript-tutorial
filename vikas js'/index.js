var a = 100;
var b = 200;
// console.log("the value of a+b",a+b);

// asignement oprator
var c = a;
c += 300;
// console.log(c)

//comparison oprator

var x = 34;
var y = 56;
// console.log(x==y)
// console.log(x>y)
// console.log(x<=y)
// console.log(x<y)
// console.log(x>y)

// logical oprator
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)

// logical or oprator

// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)

//  logical not oprator
// sach ko jhuth or jhuth ko sach kar de use logical not oprator kahte hai

// console.log(!true)
// console.log(!false)

// function

function avg(a, b) {
  return (a + b) / 2;
}

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

c1 = avg(6, 6);
c2 = avg(40, 60);

// console.log(c1,c2);

// conditional oprator

// var age = 24;
// if(age > 20){
//     console.log('you are not a kid')
// }
// else{
//     console.log('you are a kid')
// }

//if else ladder
var age1 = 16;
// if (age1 > 23){
//     console.log('you are a kid')
// }
// else if(age1 > 22){
//     console.log('vikas')
// }
// else if(age1 > 18){
//     console.log('aditya')
// }
// else if(age1 > 15){
//     console.log('pratyush')
// }
// else{
//     console.log('yarana')
// }

// var arr = [1,2,3,4,5]
// console.log(arr)

var age = 5;
if (age < 10) {
  // console.log("you are kid");
}
// else{
//     console.log('you are not a kid')
// }

// loopsssssssss
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i])

// }
// for each loop
// arr.forEach(function(element){
//     console.log(element)
// });


// arr.forEach((element) => {
//   console.log(element);
// });


// while loop
let j= 0;   
// while (j<arr.length) {
//     console.log(arr[j])
//     j++;
    
// }

// do while loop
// do {
//     console.log(arr[j])
//     j++;
// } while (j<arr.length);

// breake and continue
// breake
// for (let i = 0; i < arr.length; i++) {
//     if (i==2) {
//         continue;
//         // break
//     }
//     console.log(arr[i])
    
// }


// array method push pop 

let myArr = ['vikas','aditya',34,null,true]
// console.log(myArr.length)
// myArr.pop();  //remove first element
// myArr.push('pratyush')
// myArr.shift()  //  remove first array
// myArr.unshift('vikas')   // new lenth array
// let newLane = myArr.unshift('vikas')
// myArr.sort()  //sorting array
// myArr.reverse()   //reverse array

// console.log(newLane)

// console.log(myArr)


// string method in java script
let myLovelyString = 'i love my india'
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf('india'))
// console.log(myLovelyString.slice(1,6))
// d = myLovelyString.replace('india','world')
// d = d.replace('my','you')
// console.log(d, myLovelyString)


//date function and element
let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getDay())
// console.log(myDate.getHours())
// console.log(myDate.getMonth())
// console.log(myDate.getTime())

//dom manipulation


let elem = document.getElementById('click')
// console.log(elem)
let elemClass = document.getElementsByClassName('container')
// console.log(elemClass)
// elemClass[0].style.background='yellow'
// elemClass[0].classList.add('bg-primary')
// elemClass[0].classList.remove('bg-primary')
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

//by tag name

// let tn = document.getElementsByTagName('div')
// console.log(tn)
// createElement = document.createElement('h1')
// createElement.innerText='this is create paragraph '
// createElement2 = document.createElement('b')
// createElement2.innerText='this is bold paragraph '
// tn[0].appendChild(createElement)
// tn[0].replaceChild(createElement2,createElement)


// selecting usin query

// let sel = document.querySelector('.container')
// console.log(sel)
// let sel = document.querySelectorAll('.container')
// console.log(sel)

//javaScript Event
// function clicked() {
//   console.log('button was click')  
// }

window.onload = function () {
  console.log('window was loaded')
  
}

//event listner 

// firstcontainer.addEventListener('click',function () {
 
//   console.log('jai mata di')
  
// })

// firstcontainer.addEventListener('mouseover',function () {
//   console.log('mouse on container')
  
// })

// firstcontainer.addEventListener('mouseout',function () {
//   console.log('mouse out of container')
  
// })

// let preveiousHtml =  document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function () {
//   document.querySelectorAll('.container')[1].innerHTML= preveiousHtml;
//   console.log('mouse up')  // click ke baad chodhna
  
// })

// firstcontainer.addEventListener('mousedown',function () {
//   document.querySelectorAll('.container')[1].innerHTML="<b>jai mata di</b>"
//   console.log('mouse down')  //hold mouse button
  
// })


// arrow function

// function summ(a,b) {
//     return a+b;                 //regular function
// }

// summ = (a,b) => {
//   return a+b;                       //aroww function    
// }


// set timeout and set interwal

// log = ()=>{
//   console.log('im in log in')

// }

// setTimeout(() => {
//   console.log("im log in")
// }, 2000);


// clr = setInterval(() => {

//   console.log('kkkkkkkkkkkkk')
//   document.querySelectorAll('.container')[1].innerHTML="<b>jai mata di</b>"
// }, 2000);

//  clearInterval(clr) and clearTimeout() to cancel  //set interval rokne ke liye

// javscript local storage

// localStorage.setItem('name','vikas')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()


// about Json

// Obj = {
//   name:"vikas",
//   length: 1,
//   a:{this:"that"}
// }

// jso = JSON.stringify(Obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"vikas","length":1,"a":{"this":"that"}}`);
// console.log(parsed);