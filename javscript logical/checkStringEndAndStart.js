// check string character start and end
let string = prompt('enter a string')
let start = string.startsWith('v')
let end = string.endsWith('s')
if (start==true && end==true ) {
    console.log(`${string} start with v and end with s`)
    
}else if(start==true && end==false ){
    console.log(`${string} start with v`)
}else if (start==false && end==true){
    console.log(`${string} end with s`)
}else{
    console.log('not start with v and and end with s')
}