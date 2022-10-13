import { Person } from "./person.js";

class Student extends Person {
    constructor(course, color, gender, age, address) {
        super(gender, age, address)
        this.course = course
        this.color = color
    }

    setForExam() {
        console.log("Setting for exam")
        // add return "" if you want to avoid the undefined value returned by console.log
     }

    presentWork() {
        console.log("Presenting work")
    }

    takeBreak() {
        console.log("Taking break")
    }
}

export {Student}