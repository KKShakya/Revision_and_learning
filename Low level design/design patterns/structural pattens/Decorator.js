// Decorator Pattern

// Definition: Adds behavior to individual objects dynamically without affecting the behavior of other objects from the same class.

// Why It's Important:
//  Dynamic Behavior: Adds or modifies behavior of objects at runtime.
//  Flexible Extension: Allows for flexible and reusable code extensions.

// Decorator Pattern

// Base Component

class Coffee {
  cost() {
    return 5;
  }
}

// Decorator
class MilkDecorator {
  
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}


// Usage
const coffee = new Coffee();
const milkCoffee = new MilkDecorator(coffee);


console.log(coffee.cost()); // 5

console.log(milkCoffee.cost()); // 6


// Coffee Class: Represents the base component.
// MilkDecorator: Adds additional behavior (cost) to the coffee object.
// Dynamic Extension: Allows adding new behavior without altering the original class.