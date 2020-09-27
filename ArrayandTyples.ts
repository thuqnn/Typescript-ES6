//Array
let arr1:string[] = ["Hello", "World"];
let arr2: number[] = [1,2,3,3,4,5];
let arrAny: any[] = [12212,"hdsdhsds",true];

let arr3: Array<string> = ['THU','Bravebits'];

console.log(arr1[1]);
console.log(arr3[0]);



//Tuple
let student : [string, number,boolean];
student = ['Thu', 20, true];

student[2] = false;
student[0] = "Nguyen";
console.log(student[2])
console.log(student[0]);