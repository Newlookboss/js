const Elevator = {
  currentFloor: 1,
  maxFloor: 16,
  minFloor: 1,
  printFloor() {
    console.log(`Elevator is on the floor ${this.currentFloor}`);
  },

  upOneFloor() {
    if (this.currentFloor < this.maxFloor) this.currentFloor++;
  },
  downOneFloor() {
    if (this.currentFloor > this.minFloor) this.currentFloor--;
  },

  toFloor(floor) {
    this.printFloor();
    if (floor < this.minFloor || floor > this.maxFloor) {
      console.log('Invalid floor');
      return;
    }

    while (this.currentFloor < floor) {
      this.upOneFloor();
      this.printFloor();
    }

    if (this.currentFloor > floor) {
      for (let i = this.currentFloor; i > floor; i--) {
        this.downOneFloor();
        this.printFloor();
      }
    }
  },
};

// Elevator.printFloor();
// Elevator.upOneFloor();
// Elevator.downOneFloor();
// Elevator.downOneFloor();
// Elevator.downOneFloor();
// Elevator.downOneFloor();
// Elevator.downOneFloor();
// Elevator.printFloor();
Elevator.toFloor(16);

Elevator.toFloor(17);

Elevator.upOneFloor();

Elevator.printFloor();

// 1,2,3,4,5,6,7,8,9,10
