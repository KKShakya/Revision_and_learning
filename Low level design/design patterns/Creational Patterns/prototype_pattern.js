// Prototype Pattern

// Definition: Specifies the kinds of objects to create using a prototypical instance and creates new objects by copying this prototype.

// Why It's Important:
//  Efficient Object Creation: Reduces the cost of creating objects by cloning existing instances.
//  Simplifies Similar Object Creation: Easily creates new objects that are similar to an existing object.



// Prototype Pattern
const carPrototype = {
  make: 'Default',
  model: 'Default',
  // Clone the object
  clone() {
    return Object.create(this);
  }
};

// Usage
const car1 = carPrototype.clone();
car1.make = 'Toyota';
car1.model = 'Camry';

const car2 = carPrototype.clone();
car2.make = 'Honda';
car2.model = 'Civic';

console.log(car1); // { make: 'Toyota', model: 'Camry' }
console.log(car2); // { make: 'Honda', model: 'Civic' }


// Prototype Object: Contains default properties and a method to clone itself.
// Cloning: Creates new objects by copying the prototype, allowing efficient and consistent object creation.
// Flexible Extension: Easily modify the cloned object without altering the prototype.