export{};
// CLASS CAN BE CREATE WITH TYPESCRIPT
// CLASS WITH TWO PROPERTIES
// ATTRIBUTE & METHOD

class Greeter {
    greeting: string; //Attribute / Variable
    constructor(message: string){
        this.greeting = message;
    }
    greet(): string{ //Method
        return this.greeting;
    }
};

let abc = new Greeter(`Hello World`);
console.log(abc); //Output Greeter {greeting: Hello World}
console.log(abc.greet()); //Output Hello World




// CLASS WITH ONLY ATTRIBUTES
class Human {
    name: string
    height: number
    weight: number
    age: number
    constructor(name: string = 'Ali'){ //Default Value
        this.name = name;
        this.height = 5;
        this.weight = 70;
        this.age = 30;
    }
}
const ab = new Human();
console.log(ab);




class Humans {
    name: string
    height: number
    weight: number
    age: number
    constructor(name: string, height: number, weight: number, age: number){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    sayName(): string{
        return this.name;
    }
}
const detailsHuman = new Humans('Ali', 6, 80, 20);
console.log(detailsHuman);
console.log(detailsHuman.sayName()); 


// CLASS EXTEND WITH ANOTHER CLASS
class Student extends Humans {
    id: number
    email: string
    constructor(id: number, email: string, name: string, height: number, weight:number, age: number){
        super(name, height, weight, age)
        this.id = id;
        this.email = email;
    }
}
const studentHumans = new Student(123, 'abc@gmail.com', 'Aliyan', 6, 85, 35);
console.log(studentHumans);
console.log(studentHumans.sayName());