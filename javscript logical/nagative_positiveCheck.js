// check nagative positive number check with Mth.sign Method

// function check() {
//     let num = document.getElementById('np').value;
//     let nv = Math.sign(num)

//     document.getElementById('nvp').innerText = nv
// }


// check user define function to check number nagative to positive
function check() {
    let num = document.getElementById('np').value;
   if (num > 0) {
    nv = `${num} is positive`
   }else if(num < 0){
    nv = `${num} is nagative`
   }else if(num == 0){
    nv = `${num} is zero`
   }else{
    nv = `${num} not a number`
   }
    document.getElementById('nvp').innerText = nv
}

