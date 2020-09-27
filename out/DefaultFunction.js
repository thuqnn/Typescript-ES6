"use strict";
//truyền giá trị mặc định cho tham số của function
var getValue = function (value, tax) {
    if (value === void 0) { value = 20; }
    if (tax === void 0) { tax = 30; }
    console.log(value + tax);
};
getValue(undefined, 100);
