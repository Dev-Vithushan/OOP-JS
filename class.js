class Car {
    // Brand
    // Model
    // Year
    constructor(Brand, Model, Year) {
      this.Brand = Brand;
      this.Model = Model;
      this.Year = Year;
    }
    getBrand() {
      return this.Brand;
    }
  }
const c1 = new Car('Ford', 'Mustang', 1969);
const c2 = new Car('Chevrolet', 'Camaro', 1967);
const c3 = new Car('Dodge', 'Charger', 1969);
const c4 = new Car('Plymouth', 'Road Runner', 1969);


const brand1 = c2.getBrand();

console.log(brand1);