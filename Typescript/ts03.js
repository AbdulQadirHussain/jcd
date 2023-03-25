"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// CLASS CAN BE CREATE WITH TYPESCRIPT
// CLASS WITH TWO PROPERTIES
// ATTRIBUTE & METHOD
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
}());
;
var abc = new Greeter("Hello World");
console.log(abc); //Output Greeter {greeting: Hello World}
console.log(abc.greet()); //Output Hello World
// CLASS WITH ONLY ATTRIBUTES
var Human = /** @class */ (function () {
    function Human(name) {
        if (name === void 0) { name = 'Ali'; }
        this.name = name;
        this.height = 5;
        this.weight = 70;
        this.age = 30;
    }
    return Human;
}());
var ab = new Human();
console.log(ab);
var Humans = /** @class */ (function () {
    function Humans(name, height, weight, age) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    Humans.prototype.sayName = function () {
        return this.name;
    };
    return Humans;
}());
var detailsHuman = new Humans('Ali', 6, 80, 20);
console.log(detailsHuman);
console.log(detailsHuman.sayName());
// CLASS EXTEND WITH ANOTHER CLASS
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, email, name, height, weight, age) {
        var _this = _super.call(this, name, height, weight, age) || this;
        _this.id = id;
        _this.email = email;
        return _this;
    }
    return Student;
}(Humans));
var studentHumans = new Student(123, 'abc@gmail.com', 'Aliyan', 6, 85, 35);
console.log(studentHumans);
console.log(studentHumans.sayName());
