// Adapter Pattern

// Definition: Converts the interface of a class into another interface that a client expects, allowing incompatible interfaces to work together.

// Why It's Important:
//  Interface Compatibility: Enables classes with incompatible interfaces to collaborate.
//  Reusability: Promotes reuse of existing classes without altering their code.


// Adapter Pattern

// Old Interface
class OldPrinter {
  print() {
    console.log('Printing from the old printer...');
  }
}

// New Interface
class NewPrinter {
  start() {
    console.log('Printing from the new printer...');
  }
}

// Adapter
class PrinterAdapter {
  constructor(printer) {
    this.printer = printer;
  }

  print() {
    this.printer.start();
  }
}

// Usage
const oldPrinter = new OldPrinter();
const newPrinter = new PrinterAdapter(new NewPrinter());

oldPrinter.print(); // Printing from the old printer...
newPrinter.print(); // Printing from the new printer...


// OldPrinter & NewPrinter: Represent old and new printer interfaces.
// PrinterAdapter: Converts the new printer interface to the old one.
// Interface Compatibility: Ensures the new printer can be used where the old one was expected.
