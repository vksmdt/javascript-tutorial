// revers string in js
let str = "vikas moodotiya"
let strlenth = str.length;
// console.log(str[strlenth-1])
let res = ""
for (let index = strlenth-1; index >=0; index--) {
 res+=str[index]
    
}
console.log(res)

// exersice
let string = 'aditya songara'
let lenth = string.length
let result = ''
// console.log(string[lenth-1])
for (let i = lenth-1; i >= 0; i--) {
    result+=string[i]
    
}
console.log(result)

// prin array in revers
let arr = ['vikas', 'aditya', 'pratyush']
let rev = arr.reverse()
for (let index = 0; index < rev.length; index++) {
    const element = rev[index];
    console.log(element)
}

// console.log(rev)