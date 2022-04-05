'use strict';

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10
  console.log("accelerate", this.speed);
}

Car.prototype.brake = function () {
  this.speed = this.speed - 5
  console.log("brake", this.speed);
}

const car1 = new Car("ford", 100)
const car2 = new Car("chevy", 50)

car1.brake()
car2.brake()
