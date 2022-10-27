import { person } from "./person.js";

class student extends person {
  constructor(firstname, lastname, age, grade) {
    super(firstname, lastname, age);
    this.grade = grade;
  }

  printname() {
    console.log(this.firstname);
  }

  printage() {
    console.log(this.age);
  }
}

const student1 = new student("chen", "kiso golan", 28, "A");
console.log(student1);
student1.printname();
