"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var str = "Nguyen";
console.log(str);
var age = 20;
var sentense = "\n    Hello, My full name is " + str + ". Age is " + (age + 12) + ";\n";
console.log(sentense);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list);
var x = ['thu', 21];
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bluem"] = 2] = "Bluem";
})(Color || (Color = {}));
var c = Color[2];
console.log(c);
