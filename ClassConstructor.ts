//Cách khai báo và truyền tham số vào constructor
//C1
class Person23{
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string){
        this.fname = fname;
        this.lname = fname;
    }
}
//C2
class Person12 {
    constructor(public fname: string, public lname: string){

    }
}
let p = new Person12("THU", "Pham");
console.log(p.fname + p.lname);