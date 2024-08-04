// Observer Pattern

// Definition: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

// Why It's Important:
//  Event Handling: Enables efficient event handling and communication between objects.
//  Loose Coupling: `Promotes loose coupling between the subject and observers.`


// Observer Pattern

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update();
    }
  }
}

// Observer
class Observer {
  update() {
    console.log('Observer updated');
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers();


// Subject Class: Maintains a list of observers and notifies them of changes.
// Observer Class: Defines an update method that gets called when the subject changes.
// Efficient Communication: Allows for efficient notification of changes to multiple observers.