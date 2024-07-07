// query selector childnode

let cont = document.querySelector('.container')
// childenode text comment sb ko count krta he
console.log(cont.childNodes)

// children sirf element ko count krta he
console.log(cont.children)

// node name se node ka naam pta lgta he

let nname = cont.childNodes[0].nodeName
// console.log(nname)

/* node type
1 element
2 atribute
3 TEXT node
8 comment
9 document
10 doctype
*/
// nodetype
let ntype = cont.childNodes[0].nodeType
// console.log(ntype)


// children select krna
let contener = document.querySelector('.container')
// console.log(contener.children[1].children[0].children)

// child first element select krna
// console.log(contener.firstChild)
// console.log(contener.firstElementChild)

// child last element select krna
console.log(contener.lastChild)
console.log(contener.lastElementChild)

//childe element count
console.log(contener.childElementCount)  // count of child element


// sibling child 
console.log(contener.firstElementChild.parentNode)
console.log(contener.children[1].firstElementChild.firstElementChild.nextElementSibling)

