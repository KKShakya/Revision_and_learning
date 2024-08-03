//  Builder Pattern

// Definition: Separates the construction of a complex object from its representation, allowing the same construction process to create various representations.

// Why It's Important:
// 🔴 Simplifies Complex Object Creation: Useful for constructing objects with many parts or options.
// 🔴 Step-by-Step Construction: Allows for the step-by-step creation of objects, making the process more manageable and readable.


//  Builder Pattern
class House {
  constructor() {
    this.hasGarage = false;
    this.hasSwimmingPool = false;
  }

  // Set garage feature
  setGarage(hasGarage) {
    this.hasGarage = hasGarage;
    return this;
  }

  // Set swimming pool feature
  setSwimmingPool(hasSwimmingPool) {
    this.hasSwimmingPool = hasSwimmingPool;
    return this;
  }

  // Build the house
  build() {
    return this;
  }
}

// Usage
const house = new House()
  .setGarage(true)
  .setSwimmingPool(true)
  .build();

console.log(house); // House { hasGarage: true, hasSwimmingPool: true }


// House Class: Represents a house with optional features.
// Fluent Interface: Allows chaining methods for a readable and manageable object construction.
// Flexible Construction: Enables building complex objects step-by-step, improving clarity and reducing errors.