// desturcturing

let user = ['vikas moodotiya', 25, 'delhi']

let [name, age, city] = user

console.log(name)


//function array
function userrr() {
    return ['vikas', 25, 'neemuch']

}
let [fname, fage, fcity] = userrr()
console.log(fcity)


// destructure default values key , nested array

let nm = ['pratyush', 25, 'neemuch', ['aditya', 26]]

let [pname, page = 26, pcity, [aname, aage]] = nm;
console.log(aname)


// object destructoring
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a)

// exersice

let bk = ["vikas", "gwalior", "34"]
let [nme, cty, agee] = bk

console.log(nme, cty, agee)


function vikku() {
    return ["aditya", "neemuch", 26]
}

let [vname, acuty, vage] = vikku()
console.log(vname)