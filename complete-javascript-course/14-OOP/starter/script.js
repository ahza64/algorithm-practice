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
    return this
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

// set Car prototype properties to EV, otherwise EV will just share the same prototype as Car and break the protypial chain
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
  console.log(`${this.charge} battery charge level`);
}

// use polymorphism to set an updated "accelerate()" lower on the protypial chain, effectively invoking the call before javascript reads any higher up the prototype chain to find the older Car version of accelerate() on line 10
EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge--
  console.log(`${this.make} is going ${this.speed} with charge ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23)
// tesla.accelerate()
// tesla.chargeBattery(90)
// tesla.accelerate()
// tesla.brake()
// console.log(tesla);


/* Challenge 4 */

class EVCl extends CarCl {
  #charge; // private class field

  constructor(make, speed, charge) {
    super(make, speed) // add CarCl prototype properties to the EVCl prototype
    this.#charge = charge
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    console.log(`battery charged to ${this.#charge}`);
    return this //returning this makes this method chainable
  }

  accelerate() {
    this.speed += 20
    this.#charge--
    console.log(`${this.make} is going ${this.speed} with charge ${this.#charge}`);
    return this
  }
}

const rivian = new EVCl("Rivian", 90, 80)
rivian.accelerate().accelerate().brake().chargeBattery(90).brake().accelerate()
console.log(rivian);
