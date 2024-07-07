// create element
let elm = document.createElement('li')

// create node text
let text = document.createTextNode('jai mata di')
elm.appendChild(text)

// add classname
elm.className = 'aditya'
elm.id = 'vks'
elm.setAttribute('title', 'mytitle')
// elm.innerHTML= 'hello vikas moodotiya'

// query selector add element
let ul = document.querySelector('ul.this')
ul.appendChild(elm)
// console.log(ul)
// console.log(elm)


// replace element 

let elem2 = document.createElement('h3')
let text2 = document.createTextNode('headin 2')
elem2.appendChild(text2)

// second method
let mul = document.getElementById('myul')

// replace childe hona chahiye
mul.replaceChild(elm,document.getElementById('fui'))

elm.replaceWith(elem2)
console.log(elem2)

// remove child
// mul.removeChild(document.getElementById('vms'))

// get atribute class and id and type
let atbr = elm.getAttribute("id")

atbr = elm.hasAttribute("id")

// remove atribute class and id
// elm.removeAttribute('id')

// set atribute
elm.setAttribute('id','vks')
// console.log(elm,atbr)


// crete href element

let hrf = document.createElement("a")
hrf.setAttribute('href','https://codewithharry.com')
let txt = document.createTextNode('go to codewith harry')
hrf.appendChild(txt)
let add = document.querySelector('div.container')
add.appendChild(hrf)
console.log(add)
console.log(hrf)