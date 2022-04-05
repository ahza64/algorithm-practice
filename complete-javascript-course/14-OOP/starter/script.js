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

// car1.brake()
// car2.brake()


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

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const car3 = new CarCl("buick", 60)
// car3.brake()
// car3.speedUS = 100
// console.log(car3);


/* Challenge 3 */
const EV = function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
  console.log(`${this.charge} battery charge level`);
}

Ev.prototype.accelerate = function () {
  this.speed += 20
  this.charge--
  console.log(`${this.make} is going ${this.speed} with charge ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23)
tesla.accelerate()
tesla.chargeBattery(90)
tesla.accelerate()
tesla.brake()
console.log(tesla);
