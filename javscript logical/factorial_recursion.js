// find the factorial using recursion method

let num = 5;
var fact = 1;
function factorial(n) {
    if (n > num) {
        return
    }
    var temp = fact
    fact = fact * n;
    console.log(`${temp} * ${n} = ${fact}`)
    n++
    factorial(n)
    
}

factorial(1)
console.log(fact)