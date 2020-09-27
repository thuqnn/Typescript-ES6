//Kế thừa trong class
class PersonInherit{
    constructor(name: string){
        console.log(name + 'person contructor')
    }

    getId(){
        return 10;
    }
}

//Kế thừa constructor dùng từ khóa extends còn gọi phương thức dùng (super)
class Employee extends PersonInherit{
    constructor(name: string){
        super(name);
        console.log(name + 'Employee constructor');
    }
    getId(){
        return super.getId();
    }
}
var emp = new Employee("THU");
console.log(emp.getId());
