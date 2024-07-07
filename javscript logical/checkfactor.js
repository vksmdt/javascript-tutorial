// check factor of a number

let number = prompt("enter a number")

for (let index = 1; index < number; index++) {
    if (number%index==0) {
        console.log(index)
    }
    
}

