function test (msg:string):void{
    console.log(`this is ${msg}`)
}

test ('typescript function');

// 上例中声明了函数的参数msg为string类型，而返回值为void（没有返回值）



//normal function

function add(x:number,y:number):number{
    return x+y
}


//with parameters
// let fs='hello';
//  function readFile(file:string,callback:(err:Error|null,data:Buffer)=>void){
//     fs.readFile(file,callback)
//  }




//use class in ts

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}


let mine= new Employee('lanveer','web engineer').getElevatorPitch();
console.log('function exec data is:', mine);



