localStorage.setItem('name','vikas')  // window.localstorage in console and window.localstorage.name
localStorage.setItem('name2','pratyush') 


//clear localstorage
// localStorage.clear()
//clear particular key-value pair
localStorage.removeItem('name')

// get item from localstorage
let name1 = localStorage.getItem('name') 
// console.log(name1)

// array store in localstorage using json.stringify , json.parse
let arayy = ['vikas','aditya','paratyush']
localStorage.setItem('name3',JSON.stringify(arayy))
let vnm = JSON.parse(localStorage.getItem('name3'))
vnm.forEach(element => {
    console.log(element)
});
// console.log(vnm)


//session storage

sessionStorage.setItem('sessionname','vikas')  // window.sessionstorage in console and window.sessionstorage.name
sessionStorage.setItem('sessionname2','pratyush') 
sessionStorage.setItem('sessionname3',JSON.stringify(arayy))


//exercise
let bd = document.querySelector('body')
let dv = document.createElement('div')
dv.id = 'edit'
dv.innerText ='this is element'
bd.appendChild(dv)

document.getElementById('edit').addEventListener('click',func1)
function func1(e) {
   dv.contentEditable='true'
}
document.getElementById('edit').addEventListener('blur',vkd)
function vkd() {
    localStorage.setItem('editabl',document.getElementById('edit').innerText)
    
}




console.log(bd)



