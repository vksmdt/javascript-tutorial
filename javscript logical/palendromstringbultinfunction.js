// check palendrom string built in function
let string = 'madam'
let stringArray = string.split('')
// console.log(stringArray)
let stringArrayrev = stringArray.reverse('')
// console.log(stringArrayrev)
let joinstring = stringArrayrev.join('')
// console.log(joinstring)
if (string == joinstring) {
    console.log(`${string} this is plandrom string`)   
}else{
    console.log(`${string} this is not plandrom string`)   
}