const students = [{
    name:'vikas moodotiya',
    subject:'javascript'
}]
// function ke andar function daalna callback function hota he
// ye backgrount me run hota rahega
function enrollstudent(studnt,callbackfunction) {  // callbackfunction
    setTimeout(() => {
        students.push(studnt) 
        callbackfunction();
    }, 3000);
   

}

function getstudent() {
    setTimeout(() => {
        let str = '';
        students.forEach(element => {
            str += `<li>${element.name}</li>`
        });
        document.getElementById('stdnt').innerHTML = str;
     
    }, 1000);
   
}

let newstudent = {name:'adirya songar',subject:'python'}
enrollstudent(newstudent,getstudent) // callbackfunction
// getstudent()