class employe {
  constructor(ename, ecity, eage) {
    this.name = ename;
    this.city = ecity;
    this.age = eage;
  }
  slogen() {
    return `I am ${this.name} my age is ${this.age} and I am from ${this.city}`;
  }
  location() {
    return this.city;
  }
  static add(a, b) {// static ko bina class ke object bnaye call kar sakte he
    
    return a + b;
  }
}

let vikku = new employe("vikas moodotiya", "Neemuch", 25);
console.log(vikku.slogen());
console.log(vikku.location());
console.log(employe.add(25, 36)); // static method call

// inheritance call super function

class Programmer extends employe {
  // using extends employe class
  constructor(ename, ecity, eage, elanguage, egithub) {
    super(ename, ecity, eage); // given parameter of employe super function
    this.language = elanguage;
    this.github = egithub;
  }
  favroutelanguage(){
    if (this.language == 'python') {
        return 'python'
    }
    else{
        return 'javascript'
    }
  }
  static counting (a,b){
        return a + b;
  }
}

prgrm = new Programmer('aditya songara','neemuch',26,'react','aadi520')
console.log(prgrm)
console.log(prgrm.favroutelanguage())
console.log(Programmer.counting(5,6))