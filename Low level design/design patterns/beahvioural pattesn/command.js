// Command Pattern

// Definition: Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.

// Why It's Important:
//  Decoupling: Decouples the sender and receiver of a request.
//  Command Queue: Supports command queuing and logging.


// Command Interface
class Command {
  execute() {}
}

// Concrete Command
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

// Receiver
class Light {
  on() {
    console.log('Light is ON');
  }

  off() {
    console.log('Light is OFF');
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Light is ON


// Command Interface: Defines an execute method.
// Concrete Command: Implements the command interface.
// Invoker: Sets and executes commands.
// Receiver: Performs the actual action when a command is executed.