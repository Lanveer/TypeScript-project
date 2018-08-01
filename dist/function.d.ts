declare function test(msg: string): void;
declare function add(x: number, y: number): number;
declare class Person {
    protected name: string;
    constructor(name: string);
}
declare class Employee extends Person {
    private department;
    constructor(name: string, department: string);
    getElevatorPitch(): string;
}
declare let mine: string;
