// OOP Principles:

// Encapsulation: The bundling of data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data.

// Abstraction: The concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.

// Inheritance: The mechanism by which one class can inherit the attributes and methods from another class. It allows for code reuse and the creation of a hierarchical relationship between classes.

// Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon.


// 2. Class vs. Object:

// Class: A blueprint for creating objects. It defines a datatype by bundling data and methods that work on the data into one single unit.

// Object: An instance of a class. It is created from the class and can be used to call the methods and access the attributes defined in the class.



class Person{
  
  cosntructor(name,age){
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