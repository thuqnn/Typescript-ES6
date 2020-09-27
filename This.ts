var employee = {
    id: 211,
    name: 'Thu',
    greet: function () {
        setTimeout( () => console.log(this.name), 1000);
    }
}
employee.greet();