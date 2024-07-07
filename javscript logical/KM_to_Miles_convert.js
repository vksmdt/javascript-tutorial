// KM to Miles convert Function
function convert() {
  var kms = document.getElementById("data").value;
  const fact = 0.621371;
  var miles = kms * fact;
  document.getElementById("res").innerText = `${miles} Miles`;
}
