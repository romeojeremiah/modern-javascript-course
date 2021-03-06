class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`;
    }) //arrow functions use the this value of its parent
    return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio(){
        // Andrew is a Teacher
        return `${this.fullName} is a ${this.position}.`
    }

    getYearsLeft(){
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio(){
        return this.grade >= 70 ? `${this.firstName} is passing current class. Grade is ${this.grade}` : `${this.firstName} is failing.`
    }

    upgradeGrade(grade){
        return this.grade += grade
    }
}

const me = new Employee('Romeo', 'Clayton', 39, 'Teacher', ['Programming'])

console.log(me.getBio())




// const me = new Employee ('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking']);
// me.setName('Alexis Turner');
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const person2 = new Person('Clancy', 'Turner', 51);
// console.log(person2.getBio());

// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.likes = likes
// }
// Person.prototype.getBio = function() {
//     let bio = `${this.firstName} is ${this.age}.`;

//     this.likes.forEach((like) => {
//         bio = bio + ` ${this.firstName} likes ${like}.`;
//     }) //arrow functions use the this value of its parent
//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ');
//     this.firstName = names[0];
//     this.lastName = names[1];
// }




