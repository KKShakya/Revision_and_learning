// Facade Pattern

// Definition: Provides a simplified interface to a complex subsystem, making it easier to use.

// Why It's Important:
//  Simplified Interface: Hides the complexity of a subsystem, providing a simpler interface.
//  Improved Usability: Makes the system easier to use and understand.


// Facade Pattern
class CPU {
  start() {
    console.log('CPU started');
  }
}

class Memory {
  load() {
    console.log('Memory loaded');
  }
}

class HardDrive {
  read() {
    console.log('Hard Drive read');
  }
}
// Facade
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  start() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log('Computer started');
  }
}
// Usage
const computer = new ComputerFacade();
computer.start(); // CPU started, Memory loaded, Hard Drive read, Computer started

// Subsystem Classes: CPU, Memory, and HardDrive represent the complex subsystem.
// ComputerFacade: Provides a simplified interface to interact with the subsystem.
// Simplified Usage: Makes starting the computer straightforward and easy.
