//ts参数编写
function greeter(person) {
    return "Hello, " + person;
}
var user1 = 'lanveer';
// document.body.innerHTML = greeter(user);
console.log('function data is:', greeter(user1));
// 使用类
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greet(person) {
    return 'hello' + person.firstName + ' ' + person.lastName;
}
var user2 = new Student('Kobe', "Bryant");
console.log('greet data is:', greet(user2));
//下面实验ts的基本数据类型
//boolean 类型
var isBoolean = false;
//number类型
var decimal = 6;
//string
var names = 'lanveer';
//Array
var arr = [1, 2, 3];
var arr2 = ['apple', 'pear', 'grape'];
console.log('arr2 list data is:', arr2);
//Enum 一般在数据个数固定且值固定的情况下使用枚举。例如一个星期有七天，周一到周日。
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["black"] = 2] = "black";
})(Colors || (Colors = {}));
;
var c = Colors.black;
var c1 = Colors[0];
console.log('c data is:', c); //这里会打印出Colors的下标
console.log('c1 data is:', c1); // 这里便会是Colors的第0 个元素
//元祖类型
var x = ["hello", 10];
//任意类型
var notSure = 4;
notSure = "maybe a string instead";
//为空类型
var unusable = undefined;
