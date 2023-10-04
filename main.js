const assert = require("assert");

class Car {
  constructor(id, mpg, capacity){
     this.id = id;
     this.mpg = mpg;
     this.capacity = capacity;
     this.odometer= 0;
     this.fuel = 0;
   }

//Update to ensure you can't overfill - fuel can't ever be updated to be more than capacity. 
  addFuel = (gallons) => {
    if (this.fuel + gallons < this.capacity) {
    this.fuel +=  gallons
    return `You now have ${this.fuel} gallons`
  }

    else if (this.fuel + gallons == this.capacity) {
      this.fuel +=  gallons
      return `Your tank is now full.`
    }

    else {
    this.fuel = this.capacity
    return `You've added more gas than your tank can hold. Your tank is still full.`
    }
   
}

//Update to ensure you can't drive farther than fuel can support
//Miles driven can't be greater than available fuel. 
//Can't have negative fuel. 
//Can't have negative miles driven.
drive = (miles) => {
  let maxDistance = this.fuel * this.mpg

  if (miles > maxDistance) {
    this.odometer += maxDistance
    this.fuel = 0
    return "You're out of gas."
  }

  else if (miles < 0){
    return "Nice try, Ferris."
  }

  else {
  this.odometer += miles;
  this.fuel -= (miles / this.mpg)
  return `You now have driven ${this.odometer} miles. You now have ${this.fuel} gallons left`
  }
}
}

const Camry = new Car("vin",10,12);
Camry.addFuel(1)
Camry.drive(5);


if(typeof describe === 'function'){

  describe("Car", function(){
    it("creates a car with an id, capacity, odometer at 0, fuel at 0, and a mpg",function(){
      let c = new Car("vin",5,10);
      assert.equal(c.id,"vin")
      assert.equal(c.capacity, 10);
      assert.equal(c.odometer,0);
      assert.equal(c.fuel,0);
      assert.equal(c.mpg, 5);
    })
  })

  describe("methods drive and addFuel", function (){
    it("does NOT drive without putting fuel in", function(){
      let car1 = new Car("vin",17,10);
      car1.drive(2);
      assert.equal(car1.odometer, 0, "add gas to move car")
      assert.equal(car1.odometer, 0, "please add gas")
  })

  it("drives after adding fuel", function(){
    let car1 = new Car("vin",17,10);
    car1.addFuel(5);
    assert.equal(car1.fuel, 5);
    car1.drive(34); 
    assert.equal(car1.fuel,) 
  
  })

  it("does NOT drive after I am out of fuel", function(){
    let car = new Car("vin", 17, 10) ;
    car.addFuel(10);
    car.drive(170);
    assert.equal(car.fuel,0);
    drive(1);
    assert.equal(car.odometer,170)
    assert.equal(car.fuel,0)
  })

  it("does NOT let me put more fuel than the capacity", function() {
    let car2 = new Car(12,17,10)
    assert.equal(car2.addFuel(12));
    assert.equal(car2.fuel, 10)
  })
});
}

