// check prime number

var number = prompt();
if (number == 1) {
    console.log(`${number} is neither prime or not composite number`)
}else if(number < 1){
    console.log(`${number} is not prime number`)
}else{
    for (let index = 2; index < number; index++) {
        // 15 %2 = R:1
        // 15/2 =question = 0
     if (number%index==0) {
        var res = `${number} is not a prime number`
        break;
     }else{
        var res = `${number} is a prime number`
     }
    }
    console.log(res)
}