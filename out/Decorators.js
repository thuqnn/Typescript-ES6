"use strict";
//khai báo kiểu đặc biệt bọc ngoài class,method,accestor...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "THU";
    }
    AppComponent = __decorate([
        Component({
            selector: "my-app",
            template: "<h1> Welcome to {{name}}Decorator</h1>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
