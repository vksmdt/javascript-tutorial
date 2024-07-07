// if else , else if condition, (== value ke liye),(=== type or value ke liye)
const age = 65;
if (age==25) {
    console.log('age is 25')
    
} else if(age==65){
    console.log("age is 65")

}else {
    console.log("age is not 25")
    
}
// === type and value
const aayu = "65";
if (aayu==25) {
    console.log('age is 25')
    
} else if(aayu===65){
    console.log("age is 65")

}else {
    console.log("age is not 25")
    
}

// !=  not equal to and !== valur=e and type not matching
const aggee = 28;
if (aggee!=25) {
    console.log('age is not 25')
    
} else if(aggee===65){
    console.log("age is 65")    

}else {
    console.log("age is not 25")
    
}

// type of method if else
// const vari= 35

if (typeof vari !== 'undefined') {
    console.log('vari is define')
    
} else {
    console.log('vari is not define')
}

// bolean type in if else statement true an false
const drive= false;
if (drive) {
    console.log('drive')
    
} else {
    console.log('not drive')
    
}
// && opration dono condition true hona chahiye
if (drive && aggee>26) {
    console.log('drive')
    
} else {
    console.log('not drive')
    
}
// || opration dono me se ek true hona jaruri he
if (drive || aggee>24) {
    console.log('drive')
    
} else {
    console.log('not drive')
    
}

// ternory operator

console.log(aggee==25?'age is 25':'age is not 25')

// switch case statement  break ko htane pr sari value excuite ho jati he

switch (aggee) {
    case 25:
        console.log('you are 25')
        break;
    case 28:
        console.log('you are 28')
        break;
    case 35:
        console.log('you are 38')
        break;

    default:
        console.log('unkonowm AGE')
        break;
}