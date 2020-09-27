"use strict";
//Cách khai báo và truyền tham số vào constructor
//C1
var Person23 = /** @class */ (function () {
    function Person23(fname, lname) {
        this.fname = fname;
        this.lname = fname;
    }
    return Person23;
}());
//C2
var Person12 = /** @class */ (function () {
    function Person12(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person12;
}());
var p = new Person12("THU", "Pham");
console.log(p.fname + p.lname);
