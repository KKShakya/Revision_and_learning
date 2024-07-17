// Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (subclass or derived class) to inherit properties and behaviors from another class (superclass or base class). There are several types of inheritance patterns that define how classes can inherit from one another:

// 1. Single Inheritance
// In single inheritance, a subclass inherits from only one superclass. This is the simplest form of inheritance.


class Animal {
    eat() {
        console.log('Animal is eating');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Dog is barking');
    }
}

const dog = new Dog();
dog.eat(); // Output: Animal is eating
dog.bark(); // Output: Dog is barking


// 2. Multiple Inheritance (Not Supported in JavaScript)
// Multiple inheritance allows a subclass to inherit from multiple superclasses. However, JavaScript does not support multiple inheritance directly. This can be simulated using mixins or interfaces.

// Example (Conceptual):


class A {
    methodA() {
        console.log('Method A');
    }
}

class B {
    methodB() {
        console.log('Method B');
    }
}

// class C extends A, B { // Not valid in JavaScript
    // ...
// }

// 3. Multi-level Inheritance
// In multi-level inheritance, a subclass inherits from another subclass, forming a hierarchical structure.

// Example:


class Animal1 {
    eat() {
        console.log('Animal is eating');
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log('Dog is barking');
    }
}

class Labrador extends Dog1 {
    fetch() {
        console.log('Labrador is fetching');
    }
}

const labrador = new Labrador();
labrador.eat(); // Output: Animal is eating
labrador.bark(); // Output: Dog is barking
labrador.fetch(); // Output: Labrador is fetching

// 4. Hierarchical Inheritance
// In hierarchical inheritance, multiple subclasses inherit from the same superclass.

// Example:


class Animal2 {
    eat() {
        console.log('Animal is eating');
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log('Dog is barking');
    }
}

class Cat extends Animal2 {
    meow() {
        console.log('Cat is meowing');
    }
}

const dog2 = new Dog2();
dog2.eat(); // Output: Animal is eating
dog2.bark(); // Output: Dog is barking

const cat = new Cat();
cat.eat(); // Output: Animal is eating
cat.meow(); // Output: Cat is meowing
