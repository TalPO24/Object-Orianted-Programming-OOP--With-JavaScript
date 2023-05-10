'use strict';

/*
//* Constructor Function and The New Operator
//* The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically

//* constructor creates functions which execute in the global scope only.

const Person = function(firstName, birthYear) {
    //* Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    //* Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear)
    // }
}

const Tal = new Person('Tal', '1996')
console.log(Tal)

//* 1. New {} is created
//* 2. function is calld, this = {}
//* 3. linked to prototype
//* 4. function automatically returns {}

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
//* The prototype data property of a Function instance is used when the function is used as a constructor with the new operator. It will become the new object's prototype.

//* Operator - Reserved syntax consisting of punctuation or alphanumeric characters that carries out built-in functionality. For example, in JavaScript the addition operator ("+") adds numbers together and concatenates strings, whereas the "not" operator ("!") negates an expression — for example making a true statement return false.

console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

Tal.calcAge()
matilda.calcAge()

console.log(Tal.__proto__) // (Deprecated)
console.log(Tal.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(Tal)) //* The isPrototypeOf() method checks if an object exists in another object's prototype chain.
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(matilda.species, Tal.species)

console.log(Tal.hasOwnProperty('firstName')) //* The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(Tal.hasOwnProperty('birthYear'))
console.log(Tal.hasOwnProperty('species'))

//* Prototypal Inheritance on Built-In Objects
console.log(Tal.__proto__);
//* Object.prototype (top of prototype chain)
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

/*
//* ES6 Classes
//* class expression
// const PersonCL = class {}


//* class declaration
class PersonCL {
    constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear
        }
        //* Instance methods
        //* Methods will be added to .prototype property
    clacAge() {
        console.log(2037 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullName}`)
    }
    get age() {
            return 2037 - this.birthYear
        }
        //* Set a property that already exists 
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name
        else alert(`${name} is not a full name`)
    }
    get fullName() {
        return this._fullName
    }

    //* Static method The static keyword defines a static method or field for a class.  Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
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

//* 1. Classes are NOT hoisted
//* 2. Classes are first-class citizens
//* 3. Classes are executed in strict mode


const walter = new PersonCL('Walter white', 1965)

PersonCL.hey()
*/


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

/*
//* Object.create
//* The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
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
*/


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

/*
//* Inheritance Between "Classes": Constructor functions 
const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear) //* The call() method calls the function with a given this value and arguments provided individually.
    this.course = course;
}

//* Linking prototypes
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
*/

/*
//* Challenge #2
const Car = function(speed, make) {
    this.speed = speed;
    this.make = make;
}

Car.prototype.calcSpeed = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.calcBrake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function(speed, make, charge) {
    Car.call(this, make, speed)
    this.charge = charge;
}

//* Link the prototype
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.calcSpeed = function() {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
}

const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.calcBrake()
tesla.calcSpeed()
*/


/*
//* Inheritance Between "Classes": ES6 Classes
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }
    clacAge() {
        console.log(2037 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullName}`)
    }
    get age() {
            return 2037 - this.birthYear
        }
        //* Set a property that already exists 
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name
        else alert(`${name} is not a full name`)
    }
    get fullName() {
            return this._fullName
        }
        //* Static method
    static hey() {
        console.log('Hey there 🖐️')
            // console.log(this)
    }
}

class StudentCL extends PersonCL { //* The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    constructor(fullName, birthYear, course) {
        //* Always needs to happen first!
        super(fullName, birthYear) //* The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.course = course
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`)
    }
    clacAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
    }

}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science')
martha.introduce()
martha.clacAge()
*/

/*
//* Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}
const steven = Object.create(PersonProto)


const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};


StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*
//* Another Class Exapmle
class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #
    movements = [];#
    pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // Protected property
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

//* Encapsulatio: Protected Properties and Methods 

//* Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.


//* Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements())
*/

/*
//* Challenge #4
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {#
    charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }`
        );
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);
*/