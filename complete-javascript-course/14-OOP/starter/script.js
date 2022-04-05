'use strict';


/* Challenge 1 */
const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log("accelerate", this.speed);
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log("brake", this.speed);
}

const car1 = new Car("ford", 100)
const car2 = new Car("chevy", 50)

car1.brake()
car2.brake()


/* Challenge 2 */

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log("acc", this.speed);
  }

  brake() {
    this.speed -= 5
    console.log("bk", this.speed);
  }

  get speedUS() {
    return this.speed * 1.6
  }
}

const car3 = new CarCl("buick", 60)
car3.brake()
