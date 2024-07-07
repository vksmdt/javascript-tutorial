let a = document;
// a=document.all;

//document ki body dekhne ke liye
// a = document.body

// form ko dekhne ke liye
// a = document.forms[0]

// print all elemet for html
a =document.all

Array.from(a).forEach(element => {
    // console.log(element)
});

// linke nikalne ke liye
a = document.links[0].hrefq 

// IMAGE KO ACCESS KRNA
a = document.images

Array.from(a).forEach(element => {
    // console.log(element)
});


// script ko access krne ke liye
a = document.scripts

Array.from(a).forEach(element => {
    // console.log(a)
    
});
// console.log(a)


let b = 'vikas moodotiya'
let link = document.links

Array.from(link).forEach(element => {
    if (element.href.includes(b)) {
        console.log(element.href)
        
    }
    
}); 
