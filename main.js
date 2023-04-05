class Vehicle {
  constructor(make, model, year, color, fuelType) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelType = fuelType;
  }
  getMake() {
    return this.make;
  }
  getModel() {
    return this.model;
  }
  getYear() {
    return this.year;
  }
  getColor() {
    return this.color;
  }
  getFuelType() {
    return this.fuelType;
  }
}

const vehicle001 = new Vehicle("Airbus", "H135", 2007, "Silver", "Petrol");

console.log(vehicle001.getMake());

class Car extends Vehicle {
  constructor(make, model, year, color, fuelType, numDoors, numSeats) {
    super(make, model, year, color, fuelType);
    this.numDoors = numDoors;
    this.numSeats = numSeats;
  }
  getNumDoors() {
    return this.numDoors;
  }
  getNumSeats() {
    return this.numSeats;
  }
}

const car001 = new Car(
  "Mitzubishi",
  "Lemon",
  2023,
  "Neon Yellow",
  "Steam",
  7,
  3
);
console.log(car001.getNumSeats());

class Truck extends Vehicle {
  constructor(make, model, year, color, fuelType, bedLength, maxPayload) {
    super(make, model, year, color, fuelType);
    this.bedLength = bedLength;
    this.maxPayload = maxPayload;
  }
  getBedLength() {
    return this.bedLength;
  }
  getMaxPayload() {
    return this.maxPayload;
  }
}

const truck001 = new Truck(
  "Ford",
  "Truckster",
  "1995",
  "Emerald",
  "Hydrogen",
  1.5,
  25
);
console.log(truck001.getBedLength());
