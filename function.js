// functions
console.log('this is function')

let name = 'vikas';

const birthday = function(name,thanks='thank you') {
    let msg = (`happy birthday ${name} and ${thanks}`)
    return msg
    
}
var jai = birthday(name,'thank you so much')
console.log(jai)

// object in function

let obj = {
    name:'vikas',
    age:25,
    game:function () {
        return 'gta';
        
    }
}
console.log(obj.game())

// scope local variable and global variable
let i = 2366

{
     let i = 254;
     console.log(i)
}
console.log(i)
function m(name) {

    let i = 9
    console.log(i)
    return `this is ${name} moodotiya`
    
}
console.log(m('vikas'),i)



//replace array value
const arr = new Array(25,26,24,85)
arr[0] = "vikas";
console.log(arr)

// arrow function
let namess   = 'vikas'
let agsss = 26
let arrpw = (names,age) =>{
   let lk = `my name ${names} age ${age}`
   return lk
}


let bk = arrpw(namess,agsss) 
console.log(bk)


