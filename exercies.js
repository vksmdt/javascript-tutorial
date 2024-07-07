let dv = document.createElement("div");

let storage = localStorage.getItem("text");
let text;
if (storage == null) {
  text = document.createTextNode("this is a text node");
} else {
  text = document.createTextNode(storage);
}

dv.appendChild(text);
dv.setAttribute("class", "elem");
dv.setAttribute("id", "elem");

let cntnr = document.querySelector(".container");
let first = document.getElementById("event");
cntnr.insertBefore(dv, first);

console.log(dv, cntnr, first);

// add event listnor

dv.addEventListener("click", function () {
  let notetxt = document.getElementsByClassName("textarea").length;
  if (notetxt == 0) {
    let html = elem.innerHTML;
    dv.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});



