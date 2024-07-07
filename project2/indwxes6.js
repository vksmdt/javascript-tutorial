class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(notesObj) {
    // let tablebody = document.getElementById("tblbook");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
      html += ` <tr>
      <td>${index}</td>
      <td>${element.name}</td>
      <td>${element.author}</td>
      <td>${element.type}</td>
    `;
      // tablebody.innerHTML += uistring;
    });
    let tablebody = document.getElementById("tblbook");
    if (notesObj != 0) {
      tablebody.innerHTML = html;
    } else {
      tablebody.innerHTML = `Please Add Note`;
    }
  }

  // let uistring = ` <tr>
  //                         <td>${redata.name}</td>
  //                         <td>${redata.author}</td>
  //                         <td>${redata.type}</td>
  //                      </tr>`;
  // tablebody.innerHTML += uistring;
  // console.log("adding");

  clear() {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  show(type, message) {
    let msg = document.getElementById("msg");
    msg.innerHTML = `  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    setTimeout(() => {
      msg.innerHTML = "";
    }, 2000);
  }
}

// add submit from event listner
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", librarysubmit);

function librarysubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programing = document.getElementById("programing");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programing.checked) {
    type = programing.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let book = new Book(name, author, type);
  
  let display = new Display();
  notesObj.push(book);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  console.log(JSON.stringify(notesObj));
  // let lb = JSON.stringify(notesObj)

  if (display.validate(book)) {
    display.add(notesObj);

    display.clear();
    display.show("success", "Your books has been succesfully added");
  } else {
    // error
    display.show("danger", "Sorry you can not add this book");
  }
 
}
let b = new Display();
b.add();
