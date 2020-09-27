"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Kế thừa trong class
var PersonInherit = /** @class */ (function () {
    function PersonInherit(name) {
        console.log(name + 'person contructor');
    }
    PersonInherit.prototype.getId = function () {
        return 10;
    };
    return PersonInherit;
}());
//Kế thừa constructor dùng từ khóa extends còn gọi phương thức dùng (super)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + 'Employee constructor');
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(PersonInherit));
var emp = new Employee("THU");
console.log(emp.getId());
