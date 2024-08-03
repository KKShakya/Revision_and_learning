// Singleton Pattern
// Definition: Ensures a class has only one instance and provides a global point of access to it.

// Why It's Important:

// Control Access to Resources: Manages shared resources like database connections or configuration settings.
// Consistent State: Ensures a single point of control for specific data or logic.


// Singleton Pattern
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = this.connectToDatabase();
    DatabaseConnection.instance = this;
  }

  connectToDatabase() {
    // Logic to establish a database connection
    return "Database connection established!";
  }

  getConnection() {
    return this.connection;
  }
}

// Usage
const dbConnection1 = new DatabaseConnection();
const dbConnection2 = new DatabaseConnection();

console.log(dbConnection1 === dbConnection2); // true
console.log(dbConnection1.getConnection()); // "Database connection established!"

// The constructor checks if an instance of DatabaseConnection already exists. If it does, it returns that instance.
// If no instance exists, it creates a new one and assigns it to the static instance property.
// This ensures there is only one instance, which can be accessed globally.