class library{
    constructor(booklist){
        this.booklist=booklist;
        this.issuedbook={}

    }getbooklist(){
        this.booklist.forEach(element => {
            console.log(element)
        });
    }issueBook(bookname,user){
        this.issuedbook[bookname] = user;
    }reeturnbook(){
        delete this.issuedbook[bookname]
    }
}