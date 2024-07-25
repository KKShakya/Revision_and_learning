// Liskov situtaion - If aprent can do something a child can also do that. (Gene effect);

// interface segregation -  On 50 employees  some are fontend developers,backend,devops,HRs,Managers; 
// You gave a project and put all requirements on everyone irrespective of their department.
// will it perform good, they can't do each others work.
// distribute the actions , frontend developers will make ui, backemd APIs, managers project management, HRs new recruits and mental healths,devops deply the code.


class Bird {
  move() {
      console.log('Moving');
  }
}

class Eagle extends Bird {
  fly() {
      console.log('Eagle is flying high');
  }
}

class Penguin extends Bird {
  move() {
      console.log('Penguin is waddling');
  }
}

function makeBirdMove(bird) {
  bird.move();
}

const eagle = new Eagle();
const penguin = new Penguin();

makeBirdMove(eagle);   // Output: Moving
makeBirdMove(penguin); // Output: Penguin is waddling

eagle.fly(); // Output: Eagle is flying high
