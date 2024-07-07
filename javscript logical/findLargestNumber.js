// find largest number with Math.max() 

// user define function 
function check(p,q,r) {
    if (p>=q && p>=r) {
        return p;
    }else if(q>=p && q>=r){
        return q;

    }else{
        return r;
    }
}

let a = 5
let b = -10
let c = 8
let x = check(a,b,c)
// let x  = Math.max(a,b,c) predefine using math.max()
console.log(`${a},${b},${c} : ${x}`)


// array largest number find
let arr = [8,9,3,8,]
var num = arr[0];
for (let i = 0; i<arr.length; i++) {
    if (num<arr[i]) {
         num = arr[i]
    }
    
}

// let num = Math.max(...arr)
console.log(num)

// for loop
function max(x, y, z) 
 {
  val = 0;
  if (x > y)
  {
    val = x;
  } else
  {
    val = y;
  }
  if (z > val) 
  {
    val = z;
  }
  return val;
}

console.log(max(1,0,1));
console.log(max(-5,-10,-20));
console.log(max(1000,510,440));
