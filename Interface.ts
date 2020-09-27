//ràng buộc kiểu dữ liệu khi khai báo
interface Iperson{
    fname: string,
    lname: string,
    age?: number    // ? cho phep co hoac ko khai bao
}

var psss1 : Iperson = {
    fname: "Thu",
    lname: "Pham",
    age: 2
}

var psss2 : Iperson = {
    fname: "Nguyen",
    lname: "Lanh"
}

interface LabelledValue{
   readonly label: string;
}

function printLabel(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 1000 Object"};

printLabel(myObj);