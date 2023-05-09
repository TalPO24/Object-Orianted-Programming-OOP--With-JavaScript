'use strict';

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



//* Challenge #1
// 1.
const Car = function(curSpeed, make) {
    this.curSpeed = curSpeed,
        this.make = make
}

const bmw = new Car(120, 'BMW')
console.log(bmw)

const mercedes = new Car(95, 'Mercedes')
console.log(mercedes)


// 2. 
Car.prototype.calcSpeed = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`)
}
bmw.calcSpeed()
mercedes.calcSpeed()

// 3.

Car.prototype.calcBrake = function() {
    this.curSpeed -= 5
    console.log(`${this.make} is going at ${this.curSpeed} km/h`)
}
bmw.calcBrake()
mercedes.calcBrake()