// add button listner
showNotes();
// function for add notes from local storage
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addtitle = document.getElementById("addtitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  let = myobj ={
    title:addtitle.value,
    text:addtxt.value

  }
  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtitle.value = "";
  addtxt.value = "";
  //    console.log(notes)
  showNotes();
});

// function show notes
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="notecard my-2 mx-2"  style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}" onclick = "deleteNotes(this.id)" class="btn btn-primary">Delete Notes</button>
    </div>
</div> `;
  });

  let noteElement = document.getElementById("notes");
  if (notesObj != 0) {
    noteElement.innerHTML = html;
  } else {
    noteElement.innerHTML = `Please Add Note`;
  }
}

function deleteNotes(index) {
  console.log("delete", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// search function

let search = document.getElementById("searchTxt");
search.addEventListener("input", function (e) {
  let inpput = search.value.toLowerCase();
  // console.log(inpput)
  let card = document.getElementsByClassName("notecard");
  Array.from(card).forEach((element) => {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardtxt)
    if (cardtxt.includes(inpput)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  // console.log('search')
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
