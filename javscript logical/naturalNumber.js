// print natural number in javascript
function sum(num) {
    if (num > 0) {
        return num + sum(num-1)
        // 5+4+3+2+1 = 15
    }else{
        return num
    }

    
}
let num = 5
let a = sum(num)
console.log(a)

// using for loop
let n = 5 
let summ = 0
for (let index = 1; index <= n; index++) {

//  summ+= index
summ = summ + index
    
}
console.log(summ)