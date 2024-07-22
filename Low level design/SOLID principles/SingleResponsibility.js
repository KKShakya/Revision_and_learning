// link=>https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

// A single responsibilty is like you can say you can't be multitasking person. At one time you can be doctor,engineer,or accountant
// you can't be all.

// If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

// Goal

// This principle aims to separate behaviours so that if bugs arise as a result of your change, it won’t affect other unrelated behaviours.


// It is important to note this because several actions can be performed to fulfil a responsibility(or role). The class should have one responsibility(SRP) but its functionality that fulfils that responsibility should be open to extend(OCP).
// Also, Responsibilities(or Roles) are different from Actions.

///another example

// like a switch board - a class having multiple buttons -(responsibilities)  on it.
// You know which switch to press for which responsibility. But if some flux occurs or any other disturbace that can disturb the flow and responsiblity, the whole borad(class) can be corrupted. There is a chance right.
// so divide board charging board, Tv plug board, extension board etc...




// Example: Order Processing System
// In an order processing system, we can have different classes for handling various responsibilities such as order creation, order notification, and order persistence.

// 1. Order Class: Responsible for managing order data.
// 2. OrderRepository Class: Responsible for saving orders to the database.
// 3. OrderNotifier Class: Responsible for notifying the user about the order.


// Order class responsible for managing order data
class Order {
  constructor(orderId, customerName, items) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
  }
}

// OrderRepository class responsible for order persistence
class OrderRepository {
  save(order) {
    console.log(`Order with ID ${order.orderId} saved to the database.`);
  }
}

// OrderNotifier class responsible for sending notifications
class OrderNotifier {
  notify(order) {
    console.log(`Notification sent to ${order.customerName} for order ID ${order.orderId}.`);
  }
}


const order = new Order(1, 'John Doe', ['item1', 'item2']);
const orderRepository = new OrderRepository();
const orderNotifier = new OrderNotifier();

orderRepository.save(order);
orderNotifier.notify(order);


// Explanation:
// Order Class: Only manages the order data (order ID, customer name, and items).
// OrderRepository Class: Only handles the saving of orders to a database.
// OrderNotifier Class: Only manages sending notifications to the customer.\

// By separating these responsibilities into different classes, each class has a single responsibility, adhering to the SRP. This makes the system easier to maintain and extend. For example, if the notification logic changes (e.g., switching from email to SMS notifications), you only need to modify the OrderNotifier class without affecting the Order or OrderRepository classes.