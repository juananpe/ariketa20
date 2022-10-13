import {Student} from "./student.js";
import {Teacher} from "./teacher.js";

const student = new Student(3 /* course */ , "blue" /* fav. color */, "non-binary" /* gender */, 20 /* age */, "C/ Melancolía 13")
const teacher = new Teacher("Maths", "Dr.", 3 /* course */ , "red" /* fav. color */, "female" /* gender */, 40 /* age */, "Calle 13")

console.log(student.color)
console.log(student.age)
console.log(student.setForExam())

console.log(teacher.age)
console.log(teacher.speciality)
console.log(teacher.teach())