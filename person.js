class Person {
  constructor(gender, age, address) {
    this.gender = gender
    this.age = age
    this.address = address
  }

  move(){
    console.log("Moving")
  }

  say(){
    console.log("Saying")
  }

  think(){
    console.log("Thinking")
  }

}
export {Person}