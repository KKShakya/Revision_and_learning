// OOP Principles:

// Encapsulation: The bundling of data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data.

// Abstraction: The concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.

// Inheritance: The mechanism by which one class can inherit the attributes and methods from another class. It allows for code reuse and the creation of a hierarchical relationship between classes.

// Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon.


// 2. Class vs. Object:

// Class: A blueprint for creating objects. It defines a datatype by bundling data and methods that work on the data into one single unit.

// Object: An instance of a class. It is created from the class and can be used to call the methods and access the attributes defined in the class.



class Person{
  
  constructor(name,age){
   this.name = name;
   this.age = age;
  }

  displayName(){
    console.log(this.name)
  }
  displayAge(){
    console.log(this.age);
  }
}

//these are objects from class now
let person1 = new Person('Alice',30);
let person2 = new Person('Bob',40);


person1.displayName();
person1.displayAge();

person2.displayName();
person2.displayAge();


console.log("\nInheritance")
// 1. Inheritance


class Animal{
  constructor(name){
    this.name = name;
  }

  speak1(){
    console.log(`${this.name} makes this sound.`);
  }
}

class Dog extends Animal{
  constructor(name,breed){
    super(name); // it should be called first before this , otherwise refernce error
    this.breed = breed;
  }

  speak2(){
    console.log(`${this.name} barks.`)
  }

}

const tommy = new Dog('tommy','pug');
tommy.speak2();

const max = new Animal('max');
max.speak1();

// is it possible
console.log("parent calls child method and vice-versa")
tommy.speak2();
max.speak1();


//example 2


class Employee extends Person {
  constructor(name, age, jobTitle) {
      super(name, age); // Call the constructor of the parent class
      this.jobTitle = jobTitle;
  }

  displayJobTitle() {
      console.log(`Job Title: ${this.jobTitle}`);
  }

  displayDetails() {
      super.displayName(); // Call the displayName method from the parent class
      super.displayAge();  // Call the displayAge method from the parent class
      this.displayJobTitle();
  }
}

console.log("\nInheritance example 2")
const employee = new Employee('Alice', 30, 'Software Engineer');
employee.displayDetails(); 



// 2. Enacapsualtion

// Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class), and restricting access to some of the object's components. It allows for the implementation details of an object to be hidden from the outside world, thus protecting the integrity of the data.

// Key Points of Encapsulation:
// 1. Data Hiding: Internal state (data) of an object is hidden from the outside world and can be accessed only through public methods (getters and setters).

// 2. Access Control: Control over who can access and modify the data.

// 3. Modularity: Encapsulation promotes modularity by grouping related functionalities together.

class Employee2 {
  #salary; // Private field


  constructor(name, salary) {
      this._name = name;
      this.#salary = salary;
  }

  getSalary() {
      return this.#salary;
  }

  getName(){
    return this._name;
  }

  setSalary(newSalary) {
      if (newSalary > 0) {
          this.#salary = newSalary;
      } else {
          console.log('Invalid salary');
      }
  }
}

console.log("\nEnacasulation")
const emp = new Employee2('Alice', 50000);
console.log(emp.getSalary()); // Output: 50000
emp.setSalary(60000);
console.log(emp.getSalary()); // Output: 60000

// # vs underscore
// both are private variables designed to not get accessed outside the class methods.
// but only new ECMA Script '#' Provides true encapsulation by restricting access to these fields from outside the class.

console.log(emp._name); //it will get printed
// console.log(emp.#salary) // this line gives private access error , more secure


//  3 . Abstraction: 

// Abstraction focuses on hiding the implementation details while providing an interface to the user. It allows you to deal with objects at a higher level of complexity without worrying about their internal details. Abstraction reduces complexity by modeling classes appropriate to the problem, and focusing on the essential aspects without including unnecessary details.

// Key Points of Abstraction:

// 1. Essential vs. Non-Essential Details: It identifies and focuses on the essential features of an object, while hiding non-essential details.

// 2. Implementation Hiding: It hides the complex implementation behind a simpler interface.

// 3. Level of Detail: Abstraction provides a level of detail appropriate to the problem domain.

class Car {
  constructor(make, model) {
      this.make = make;
      this.model = model;
  }

  start() {
      this.#startEngine();
      console.log('Car started');
  }

  #startEngine() { // Private method
      console.log('Engine started');
  }
}


console.log("\nAbstraction")
const car = new Car('Toyota', 'Corolla');
car.start(); 
// car.#startEngine(); // private access error



// 4.  Polymorphism

// Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. 

// two type:
// Method overloading => same methods different parameters. //javascript does not support;
// Method overriding => run time - same methods in diiferent subclass each associated eith its own class;

class Animal2 {
  makeSound() {
      console.log('Generic animal sound');
  }
}

class Dog2 extends Animal2 {
  makeSound() {
      console.log('Bark bark!');
  }
}

class Cat extends Animal2 {
  makeSound() {
      console.log('Meow meow!');
  }
}

console.log("\nPolymorphism\n")
// Example of polymorphism
const dog = new Dog2();
const cat = new Cat();

dog.makeSound(); // Output: Bark bark!
cat.makeSound(); // Output: Meow meow!

//static varaibles in javascript;

console.log("\nStatic variables")

class MyClass {
  static staticVariable = 'Hello';

  static staticMethod() {
      console.log('Static method called');
  }
}

console.log(MyClass.staticVariable); // Output: Hello
MyClass.staticMethod(); // Output: Static method called

// Static properties/methods are accessed using the class name (MyClass.staticVariable) or the constructor function (MyClass.staticMethod()).


