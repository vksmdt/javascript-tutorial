// string method in javascript
const name = 'vikas'
const greeting = 'good morning'

console.log(greeting + " " + name)

// concate string add string
let html ;
html = '<h1>HELLO vikas</h1>'+'<p>this is paragraph</p>' 
html = html.concat(' pratyush ', ' aditya')
console.log(html)       
console.log(html.length)        
//to lowercase function
console.log(html.toLowerCase())        
// touppercase function
console.log(html.toUpperCase())        

// indexing method
console.log(html[2])
console.log(html.indexOf('<'))
console.log(html.lastIndexOf('<'))
console.log(html.charAt(3))
// ends with and include string end
console.log(html.endsWith('aditya'))
console.log(html.includes('aditya   '))
// substrin kon se index se kon se index tak jana hai jisme first wala include hota he last wala nhi hota he 
console.log(html.substring(0,3))
// .slice() kA use string ko slice krta he
console.log(html.slice(0,3))
// split() string ko tod kar array bna deta he
console.log(html.split(' '))
//replace function using replace string only first accurence
console.log(html.replace('HELLO','hy'))



// templet littrals
let fruit1 = 'apple'
let fruit2 = 'mango'
let myhtml = `hello ${name} <h1>your favrouit</h1><p>your like ${fruit1} and ${fruit2}</p>`

 document.body.innerHTML= myhtml;               