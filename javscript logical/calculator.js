// calculator
let num1 = prompt('enter a Number')
let num2 = prompt('enter a Number')
let oprtaor = prompt('enter a oprtaor  + - * /')

switch (oprtaor) {
    case "+":
       var res = parseFloat(num1) + parseFloat(num2) ;
        console.log(`${num1} + ${num2} = ${res}`)
        break;
    case "-":
        var res = num1 - num2;
        console.log(`${num1} - ${num2} = ${res}`)
        break;
    case "*":
       var res = num1 * num2;
        console.log(`${num1} * ${num2} = ${res}`)
        break;
    case "/":
        var res = num1 / num2;
        console.log(`${num1} / ${num2} = ${res}`)
        break;

    default:
       console.log('Invalid Oprator')
}
