// ! Declare class in JS

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Bagoan K.C.V.N Hogh school" ;
    }
}

const stu = new Student(1, "Haasibul Hasan");
const stu2 = new Student(2, "Afia Rahman");

console.log(stu, stu2);