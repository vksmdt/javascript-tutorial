let a = 25

a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){  // && opration me dono me se ek bi false hoti he to vah false ho jati he
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))    

// switch case statement

let color = 'orange'
switch (color) {
    case 'mango':
        console.log('this is not a mnago')
        
        break;
        case 'graps':
        console.log('this is not grapss')
        
        break;
        case 'orange':
        console.log('this is  orange')
        
        break;

    default:
        console.log('this is a orange')
        break;
}

// exersice
let b = 14
if (b<0) {
    console.log('invalid number')
}else if (b<9){
    console.log('you can not drive')
}else if(b<18 && b>=9){
    console.log('You are a kid and you can think of driving after 18')
}else{
    console.log("You can now drive as you are above 18");
}
