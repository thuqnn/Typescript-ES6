//khai báo kiểu đặc biệt bọc ngoài class,method,accestor...

@Component({
    selector: "my-app",
    template: "<h1> Welcome to {{name}}Decorator</h1>"
})

export class AppComponent{
     name: string = "THU";

}