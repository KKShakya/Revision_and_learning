// solid a electric board

// open closed - you ahve house duties , you were a checf at 2 miutes aearlier, now you have no skills of checf and became a gardener, again you left ahve no skills of gardener and became elctician. 
// you can have diffenrt duties and master of all, checf+gardener+electrician.
// It follows the above solid rule, we said a class should ahve single responsbility but addition to that you can extend it not modify it. You first learned cooking then gardening, then elctrician but that does not mean you forgot cookign and gardenig at last.

// Liskov situtaion - If aprent can do something a child can also do that. (Gene effect);

// interface segregation -  On 50 employees  some are fontend developers,backend,devops,HRs,Managers; 
// You gave a project and put all requirements on everyone irrespective of their department.
// will it perform good, they can't do each others work.
// distribute the actions , frontend developers will make ui, backemd APIs, managers project management, HRs new recruits and mental healths,devops deply the code.

//Dependency inversion

// High-level modules should not depend on low-level modules. Both should depend on the abstraction.

// - Abstractions should not depend on details. Details should depend on abstractions.


// High-level Module(or Class): Class that executes an action with a tool.

// Low-level Module (or Class): The tool that is needed to execute the action

// Abstraction: Represents an interface that connects the two Classes.

// Details: How the tool works

// I ahve a  class that knows where to fit the screws to adjust a tool, the interface have screws to fit but does not know where to fit it, the tool is present to perform action,



// Class responsible for user data
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Class responsible for user-related operations
class UserService {
  createUser(name, email) {
    // Logic to create a user
    return new User(name, email);
  }
}

const userService = new UserService();
const user = userService.createUser('John Doe', 'john.doe@example.com');
console.log(user);
