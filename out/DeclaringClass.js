"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("is running....");
    };
    return Person;
}());
var p1 = new Person();
console.log(typeof Person);
console.log(p1.run === Person.prototype.run);
var PersonCtr = /** @class */ (function () {
    function PersonCtr(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    PersonCtr.talk = function () {
        console.log('this is static method is talk');
    };
    PersonCtr.prototype.run2 = function () {
        console.log('person running....');
    };
    return PersonCtr;
}());
var p2 = new PersonCtr("Thu");
PersonCtr.talk();
p2.run2();
