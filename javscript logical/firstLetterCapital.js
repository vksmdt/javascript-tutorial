function firstLetterCapital(string) {
   
    return string.charAt(0).toUpperCase() + string.slice(1) 
    
    
}
let name = 'vikas moodotiya'
let a = firstLetterCapital(name)
console.log(a)


// excersise without function


let str = prompt('enter a name')
let charcterselect = str.charAt(0)
let slice = str.slice(1)
let final = charcterselect.toLocaleUpperCase() + slice
console.log(final)
