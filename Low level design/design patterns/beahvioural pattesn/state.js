// State Pattern

// Definition: Allows an object to change its behavior when its internal state changes, appearing to change its class.

// Why It's Important:
//  State Encapsulation: Encapsulates state-specific behavior.
//  Dynamic Behavior: Enables objects to alter their behavior based on state changes.


// State Interface
class State {
  handle() {}
}

// Concrete States
class OnState extends State {
  handle() {
    console.log('Light is ON');
  }
}

class OffState extends State {
  handle() {
    console.log('Light is OFF');
  }
}

// Context
class LightSwitch {
  constructor() {
    this.state = new OffState();
  }

  setState(state) {
    this.state = state;
  }

  pressButton() {
    this.state.handle();
  }
}

// Usage
const lightSwitch = new LightSwitch();

lightSwitch.pressButton(); // Light is OFF
lightSwitch.setState(new OnState());
lightSwitch.pressButton(); // Light is ON


// State Interface: Defines a handle method.
// Concrete States: Implement the state interface.
// Context: Maintains a reference to the current state and delegates state-specific behavior to it.