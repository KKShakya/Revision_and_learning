//  Abstract Factory Pattern

// Definition: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

// Why It's Important:
// 🔴 Facilitates Family of Objects: Simplifies the creation of related objects that work together.
// 🔴 Abstracts Creation Logic: Promotes loose coupling by abstracting the instantiation process.



// Abstract factory pattern
class Car {
  constructor(make) {
    this.make = make;
  }
}

class Bike {
  constructor(make) {
    this.make = make;
  }
}

class VehicleFactory {
  // Create a vehicle based on the type
  createVehicle(type, make) {
    switch (type) {
      case 'Car':
        return new Car(make);
      case 'Bike':
        return new Bike(make);
      default:
        return null;
    }
  }
}

// Usage
const factory = new VehicleFactory();
const car = factory.createVehicle('Car', 'Toyota');
const bike = factory.createVehicle('Bike', 'Yamaha');

console.log(car); // Car { make: 'Toyota' }
console.log(bike); // Bike { make: 'Yamaha' }


// Vehicle Classes: Represents different types of vehicles.
// VehicleFactory Class: Encapsulates the logic to create different vehicle types.
// Flexible Object Creation: Allows for easy addition of new vehicle types without changing client code.
