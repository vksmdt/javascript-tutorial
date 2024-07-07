//object event 
// 1 click event
document.getElementById('event').addEventListener('click',function (e) {

    let variable ;
    console.log('click me')
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    // class list ko array ,me itrate krna
    variable = Array.from(e.target.classList);
    //x and y ma offset show hona
    variable=e.offsetX
    variable=e.offsetY
    //clint x and y browser window ke click ko show krta he
    variable=e.clientX
    variable=e.clientY
    console.log(variable)
})

// form submit click event
let but = document.getElementById('btn')
but.addEventListener('click',func1)

function func1(e) {
    // console.log('thank you' , e)
    e.preventDefault()

    
}

// double click event

// form submit click event

but.addEventListener('dblclick',func2)

function func2(e) {
    // console.log('double click' , e)
    e.preventDefault()

    
}

// mouse down event mouse wheel click and down click

but.addEventListener('mousedown',func2)

function func2(e) {
    console.log('mouse down' , e)
    e.preventDefault()

    
}

// mouseenter and mouse leave event
// document.querySelector('.vi').addEventListener('mouseenter', menter)
// function menter(e) {
//     console.log('mouse enter', e)
    
// }

// document.querySelector('.vi').addEventListener('mouseleave', mleave)
// function mleave(e) {
//     console.log('mouse leave', e)
    
// }

//mouse move event

document.querySelector('.container').addEventListener('mousemove', mmove)
function mmove(e) {
    // offsetx and offsety  mouse ki range count krta he
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`
    console.log('mouse move', e)
    
}