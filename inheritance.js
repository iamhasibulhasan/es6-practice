// ?Parent Class
class Parent{
    constructor(){
        this.fatherName = "Anisur Rahman";
    }
}

// ? Child Class

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return `${this.name} ${this.fatherName}`;
    }
}

const baby = new Child("Proma");
const baby2 = new Child("Usha");

console.log(baby.getFullName());
console.log(baby2.getFullName());