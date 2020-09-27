class Person{
    run(){
        console.log("is running....");
    }
}
let p1 = new Person();

console.log(typeof Person);
console.log(p1.run === Person.prototype.run);

class PersonCtr{
    constructor(name){
        this.name = name;
        console.log(this.name + " constructor");
    }
    static talk(){
        console.log('this is static method is talk')
    }
    run2(){
        console.log('person running....');
    }
}

let p2 = new PersonCtr("Thu");

PersonCtr.talk();
p2.run2();