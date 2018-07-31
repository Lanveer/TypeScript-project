var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function test(msg) {
    console.log("this is " + msg);
}
test('typescript function');
// 上例中声明了函数的参数msg为string类型，而返回值为void（没有返回值）
//normal function
function add(x, y) {
    return x + y;
}
//with parameters
// let fs='hello';
//  function readFile(file:string,callback:(err:Error|null,data:Buffer)=>void){
//     fs.readFile(file,callback)
//  }
//use class in ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var mine = new Employee('lanveer', 'web engineer').getElevatorPitch();
console.log('function exec data is:', mine);
