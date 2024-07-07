/* 
 types of element selector
 1- single element selector
 2- multi element selector
*/

let element = document.getElementById('jai')
// element= element.className
// element= element.childNodes
// element= element.parentNode


// css change by element
 element.style.color = 'red    '


// change inner text 
element.innerText = ' jai mata di'

// change element inner html
element.innerHTML = '<b> jai mata di</b>'

// console.log(element.innerHTML)

// query selector using in DOM
let query = document.querySelector('#jai')
query = document.querySelector('.vikas')


// tag name select
query = document.querySelector('b')
query = document.querySelector('div')
// console.log(query)



// multi element selector queru selector all
let elems = document.getElementsByClassName('vikas')

elems = document.getElementsByClassName('container')
// console.log(elems[0].getElementsByClassName('cls'))

// getelement by tag name select tag name

elems = document.getElementsByTagName('div')

//color change
Array.from(elems).forEach(element => {
    console.log(element)
    element.style.color ="blue"
    
});
console.log(elems)



