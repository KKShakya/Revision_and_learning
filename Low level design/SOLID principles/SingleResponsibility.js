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