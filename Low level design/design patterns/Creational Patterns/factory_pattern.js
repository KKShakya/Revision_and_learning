
// Factory Method Pattern

// Definition: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.

// Why It's Important:

// Flexibility: Allows the code to remain flexible and easy to extend without modifying existing code.
// Encapsulation: Encapsulates the object creation process, separating it from the main logic.
// Example in JavaScript:

// Imagine you are creating an online store that sells different types of products. You want to create these products based on user input without having to modify the code for each new product type.

// Factory Method Pattern
class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class ProductFactory {
  createProduct(type) {
    switch (type) {
      case 'Electronics':
        return new Product('Electronics Product');
      case 'Clothing':
        return new Product('Clothing Product');
      case 'Food':
        return new Product('Food Product');
      default:
        return null;
    }
  }
}

// Usage
const factory = new ProductFactory();
const electronicsProduct = factory.createProduct('Electronics');
const clothingProduct = factory.createProduct('Clothing');

console.log(electronicsProduct.getName()); // "Electronics Product"
console.log(clothingProduct.getName()); // "Clothing Product"


// Product Class: Represents the products that will be created by the factory.
// ProductFactory Class: Contains the createProduct method, which takes a type parameter and creates a product based on the type.
// Usage: The factory is used to create different products (Electronics Product and Clothing Product) without changing the ProductFactory class or the Product class.
