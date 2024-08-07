// Strategy Pattern

// Definition: Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

// Why It's Important:
// Algorithm Encapsulation: Encapsulates algorithms for easy interchangeability.
// Flexibility: Allows dynamic selection of algorithms at runtime.


// Strategy Interface
class SortingStrategy {
  sort(data) {}
}

// Concrete Strategies
class BubbleSort extends SortingStrategy {
  sort(data) {
    console.log('Sorting using Bubble Sort');
  }
}

class QuickSort extends SortingStrategy {
  sort(data) {
    console.log('Sorting using Quick Sort');
  }
}

// Context
class Sorter {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    this.strategy.sort(data);
  }
}

// Usage
const sorter = new Sorter();

sorter.setStrategy(new BubbleSort());
sorter.sort([]); // Sorting using Bubble Sort

sorter.setStrategy(new QuickSort());
sorter.sort([]); // Sorting using Quick Sort

// Strategy Interface: Defines a sort method.
// Concrete Strategies: Implement the strategy interface with specific algorithms.
// Context: Uses a strategy to perform sorting based on the current strategy.