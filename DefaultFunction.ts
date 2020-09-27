//truyền giá trị mặc định cho tham số của function

var getValue = function (value = 20, tax = 30) {
    console.log(value + tax);
}
getValue(undefined, 100);