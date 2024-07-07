let date = new Date()
console.log(typeof date)

let otherdate = new Date('22 march 1995') // mm/dd/yy
console.log(otherdate)

// fetch particular day and date and time
let a;
a = otherdate.getDay(); 
a = otherdate.getDate();
a = otherdate.getMonth();
a = otherdate.getMinutes();
a = otherdate.getSeconds();
a = otherdate.getHours();
a = otherdate.getTime();

console.log(a)

// set date month year
otherdate.setDate(25)
otherdate.setMonth(0)
otherdate.setYear(1995)
otherdate.setMinutes(1)
otherdate.setHours(1)
otherdate.setSeconds(1)
console.log(otherdate)
