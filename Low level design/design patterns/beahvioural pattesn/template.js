// Template Method Pattern

// Definition: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

// Why It's Important:
//  Algorithm Framework: Defines a fixed algorithm structure with customizable steps.
//  Code Reuse: Promotes reuse of algorithm structures.


// Template Method Pattern
class DataProcessor {
  process() {
    this.load();
    this.transform();
    this.save();
  }

  load() {
    throw new Error('load() must be implemented');
  }

  transform() {
    throw new Error('transform() must be implemented');
  }

  save() {
    console.log('Saving data...');
  }
}

// Concrete Class
class CSVDataProcessor extends DataProcessor {
  load() {
    console.log('Loading CSV data...');
  }

  transform() {
    console.log('Transforming CSV data...');
  }
}

// Usage
const processor = new CSVDataProcessor();
processor.process();
// Loading CSV data...
// Transforming CSV data...
// Saving data...


// Abstract Class: Defines the process method with a fixed algorithm structure.
// Concrete Class: Implements the abstract steps.
// Algorithm Framework: Ensures a consistent algorithm structure while allowing customization of specific steps.
