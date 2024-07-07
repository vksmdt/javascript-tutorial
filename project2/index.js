//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
// display constructor
function Display(){

}

// add method to displya prototype
Display.prototype.add = function(book){
    tablebody = document.getElementById('tblbook')
    let uistring = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                     </tr>`
    tablebody.innerHTML += uistring 
    console.log('adding')
}
// implement clear function
Display.prototype.clear = function(){
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

// validate function
Display.prototype.validate=function(book){
 if (book.name.length<2 || book.author.length<2) {
    return false;
 }else{
    return true;
 }

}
// show error function
Display.prototype.show=function(type,message){
    let msg = document.getElementById('msg')
    msg.innerHTML = `  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

     setTimeout(() => {
        msg.innerHTML = ''
     }, 2000);                   
   }

// add submit from event listner
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", librarysubmit);

function librarysubmit (e) {
    e.preventDefault();
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programing = document.getElementById("programing");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value
  }else if(programing.checked){
    type= programing.value
  }else if(cooking.checked){
    type=cooking.value
  }

  let book = new Book(name, author, type);
  console.log(book)
  let display = new Display()
  
  if (display.validate(book)) {
    display.add(book)
     display.clear()
     display.show('success','Your books has been succesfully added')
  }else{
    // error
    display.show('danger','Sorry you can not add this book')
  }
  

}
