'use strict';

//* Constructor Function and The New Operator
const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // Never do this
    this.calcAge = function() {
        console.log(2037 - this.birthYear)
    }
}

const Tal = new Person('Tal', '1996')
console.log(Tal)

// 1. New {} is created
// 2. function is calld, this = {}
// 3. linked to prototype
// 4. ffunction automatically returns {}

const matilda = new Person('Matilda', 2017)
const Jack = new Person('Jack', 1975)
console.log(matilda, Jack)

console.log(Tal instanceof Person)