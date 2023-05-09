'use strict';

/*
//* Constructor Function and The New Operator
// The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically

// constructor creates functions which execute in the global scope only.

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear)
    // }
}

const Tal = new Person('Tal', '1996')
console.log(Tal)

// 1. New {} is created
// 2. function is calld, this = {}
// 3. linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017)
const Jack = new Person('Jack', 1975)
console.log(matilda, Jack)

console.log(Tal instanceof Person)

Person.hey = function() {
    console.log('Hey there 🖐️')
    console.log(this)
}
Person.hey()
*/

/*
//* Prototypes 
// The prototype data property of a Function instance is used when the function is used as a constructor with the new operator. It will become the new object's prototype.

// Operator - Reserved syntax consisting of punctuation or alphanumeric characters that carries out built-in functionality. For example, in JavaScript the addition operator ("+") adds numbers together and concatenates strings, whereas the "not" operator ("!") negates an expression — for example making a true statement return false.

console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

Tal.calcAge()
matilda.calcAge()

console.log(Tal.__proto__) // (Deprecated)
console.log(Tal.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(Tal)) // The isPrototypeOf() method checks if an object exists in another object's prototype chain.
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(matilda.species, Tal.species)

console.log(Tal.hasOwnProperty('firstName')) // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(Tal.hasOwnProperty('birthYear'))
console.log(Tal.hasOwnProperty('species'))

//* Prototypal Inheritance on Built-In Objects
console.log(Tal.__proto__);
// Object.prototype (top of prototype chain)
console.log(Tal.__proto__.__proto__);
console.log(Tal.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor)

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/*
//* Challenge #1
// 1.
const Car = function(speed, make) {
    this.speed = speed;
        this.make = make
}

// 2. 
Car.prototype.calcSpeed = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

// 3.
Car.prototype.calcBrake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
}


const bmw = new Car(120, 'BMW')
const mercedes = new Car(95, 'Mercedes')

bmw.calcSpeed()
bmw.calcSpeed()
bmw.calcBrake()
mercedes.calcSpeed()
mercedes.calcSpeed()
mercedes.calcBrake()

*/

//* ES6 Classes

// class expression
// const PersonCL = class {}

// class declaration
class PersonCL {
    constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear
        }
        // Instance methods
        // Methods will be added to .prototype property
    clacAge() {
        console.log(2037 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullName}`)
    }
    get age() {
            return 2037 - this.birthYear
        }
        // Set a property that already exists 
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name
        else alert(`${name} is not a full name`)
    }
    get fullName() {
        return this._fullName
    }

    // Static method The static keyword defines a static method or field for a class.  Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
    static hey() {
        console.log('Hey there 🖐️')
            // console.log(this)
    }
}

const jessica = new PersonCL('Jessica Davis', 1996)
console.log(jessica)
jessica.clacAge()
console.log(jessica.age)

// PersonCL.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`)
// }
jessica.greet()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


const walter = new PersonCL('Walter white', 1965)

PersonCL.hey()

/*
//* Setters and Getters
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()

    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest)

account.latest = 50
console.log(account.movements)
*/


//* Object.create
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const personProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const steven = Object.create(personProto)

console.log(steven)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()

console.log(steven.__proto__ === personProto)

const sarah = Object.create(personProto)
sarah.init('Sarah', 1979)
sarah.calcAge()



/*
//* Challenge #2
class Car {
    constructor(make, speed) {
        this.speed = speed;
        this.make = make
    }
    calcSpeed = function() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    calcBrake = function() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        return this.speed = speed * 1.6
    }

}

const ford = new Car('Ford', 120)
console.log(ford.speedUS)
ford.calcSpeed()
ford.calcSpeed()
ford.calcBrake()
ford.speedUS = 50;
console.log(ford)
*/

//* Inheritance Between "Classes": Constructor functions 
const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear) // The call() method calls the function with a given this value and arguments provided individually.
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype)


Student.prototype.interduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Sciencs')
mike.interduce()
mike.calcAge()

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);