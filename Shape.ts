export class Shape {
    [x: string]: any;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
    calculateArea(): number{
        return 0;
    }
}
