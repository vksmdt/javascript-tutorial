// celcious to ferenahit convert Function

//focus enter key
var input = document.getElementById("val");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function convert() {
  let c = document.getElementById("val").value;
  let f = c * 1.8 + 32;

  document.getElementById("result").innerText = `${c} °C = ${f} °F`;
}
