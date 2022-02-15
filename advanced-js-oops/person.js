class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age} `;
    this.likes.forEach((like) => {
      bio = bio + `${this.firstName} likes ${like} `;
    });
    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    super(firstName, lastName, age, (likes = []));
    this.position = this.position;
  }
}

const myPerson = new PersonClass("Andrew", "Mead", 27, ["Teaching", "Biking"]);
console.log(myPerson.getBio());

// const me = new Person("Andrew", "Mead", 27, ["Teaching", "Biking"]);
// console.log(me.age);
// console.log(me.location);

// const person2 = new Person("Clancy", "Turner", 51);
// console.log(person2.getBio());
