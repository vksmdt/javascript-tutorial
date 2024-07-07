// oops 

class hello{
    //method
    message(){
        console.log('hello everyone')
    }
    sorry(){
        console.log('sorry')
    }
}

let a = new hello() // using new keyword
a.message()
a.sorry()

/*types of method
1 -constructor - ye automatic call hote
2 -prototype - ye automatic call nhi hote hai
3 static method - ise bina object ke call kar sakte hai 
*/

//1 constructor - automatic call hota hai
class student {
    constructor(name,age) {
        this.studentn=name
        this.agee=age
        console.log('hy vikas')
        
    }hel(){ // prototype
        console.log(`hey ${this.studentn} age is ${this.agee}`)
    }static viks(){ // static
        console.log('jai shree krishna')
    }
}
 // multiple object
let cnc = new student('vikas moodotiya', 25)
let cvnc = new student('rahul moodotiya', 30)

//call method
cnc.hel()
cvnc.hel()
//call static method
student.viks()

/*
class b
*/ 


// construtor example
function Genratecar(givenname , givenspeed) {
    this.name = givenname;
    this.speed = givenspeed;
    this.run = function () {
        console.log(`${this.name} is running` )
    } 
    this.analyze = function () {
        console.log(`this car slower by ${200 - this.speed} kmph than mercedez` )
    }
    
}

let car1 = new Genratecar('nisaan',180)
let car2 = new Genratecar('alto',80)
console.log(car1.run())
console.log(car2.analyze())

// object litrals : object.prototype
let obj = {
    name:'vikas moodotiya',
    class : 'mca',
    city :'neemuch'
}
console.log(obj)


function obj1(givenname) {  // prototype constructor
    this.name = givenname;
}
obj1.prototype.getName = function () { // using get name
    return this.name
}


obj1.prototype.setName = function (newName) { // using get name
   this.name = newName
}
 
let obj2 = new obj1('vikku')
console.log(obj2)


//excersise constructor

function vikku(setName,setCity) {
    this.name = setName;
    this.city = setCity
}

let exmpl = new vikku('aditya songara','neemuch')
console.log(`name : ${exmpl.name} , city : ${exmpl.city}`)

// prototype exercise
let objct = {
    name:'rahul borana',
    city :'bhanpura'
}
console.log(objct)

function rhul(bname,bcitya) {
    this.name = bname
    this.city = bcitya
}

rhul.prototype.setName =function(rhnname) {
    this.name= rhnname
}


let bnpr = new rhul('Rahul Borana','Bhanpura')
bnpr.setName('bdhhbhbjhbh')
console.log(bnpr)