// What is the Open/Closed Principle (OCP)?
// The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that the behavior of a module can be extended without modifying its source code.

// Analogy:
// Imagine you have various duties around your house. Initially, you were a chef, then you learned gardening, and later became an electrician. Despite learning new skills, you did not forget the previous ones. Similarly, a class should be designed in such a way that it can handle new functionality through extension rather than modification.

// Example in JavaScript:
// Here’s a simple example demonstrating the Open/Closed Principle. In this example, the Employee class is extended to add new roles without modifying the existing class.


// open closed Principle

class Employee {
  constructor(name) {
    this.name = name;
  }

  getRole() {
    return 'Employee';
  }
}

// Extended classes
class Chef extends Employee {
  getRole() {
    return 'Chef';
  }
}

class Gardener extends Employee {
  getRole() {
    return 'Gardener';
  }
}

class Electrician extends Employee {
  getRole() {
    return 'Electrician';
  }
}

const employees = [
  new Chef('John Doe'),
  new Gardener('Jane Smith'),
  new Electrician('Jim Brown')
];

employees.forEach(employee => console.log(`${employee.name} is a ${employee.getRole()}`));
