"use strict";
var employee = {
    id: 211,
    name: 'Thu',
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.name); }, 1000);
    }
};
employee.greet();
