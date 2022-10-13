import { Person } from "./person.js";

class Teacher extends Person {
    constructor(speciality, qualification, gender, age, address) {
        super(gender, age, address)
        this.speciality = speciality
        this.qualification = qualification
    }

    teach() {
        console.log("Teaching")
    }

    assessWork() {
        console.log("Assessing work")
    }

    giveInstructions() {
        console.log("Giving instructions")
    }
    
}


export {Teacher}