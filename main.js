const assert = require("assert");

class Car {
  constructor(id, mpg, capacity){
     this.id = id;
     this.mpg = mpg;
     this.capacity = capacity;
     this.odometer= 0;
     this.fuel = 0;
   }

// HW. Update to ensure you can't "over fuel"
// (fuel can't ever be updated to be more than capacity)
  addFuel = (gallons) => {
    // if you're adding gas, but it hasn't filled up the tank
    if (this.fuel + gallons < this.capacity) {
    // add the number of gallons to the fuel tank
    this.fuel +=  gallons
    return `You now have ${this.fuel} gallons`
  }
    // if you're adding gas, and it's enough to fill up the tank
    else if (this.fuel + gallons == this.capacity) {
      this.fuel +=  gallons
      return `Your tank is now full.`
    }
    // if you're adding gas, but you've added more gas than your tank has capacity for
    else {
    // since you've added so much gas your tank is at capacity, you can just set the fuel
    // equal to capacity. 
    this.fuel = this.capacity
    return `You've added more gas than your tank can hold. Your tank is still full.`
    }
   
}

// HW. Update so only the appropriate miles are driven
drive = (miles) => {
  //Easier to have a variable holding the max distance a car can drive (fuel x miles per gallon)
  let maxDistance = this.fuel * this.mpg

  //Update to ensure you can't drive farther than fuel can support
 if (miles > maxDistance) {
    //Miles driven can't be greater than available fuel. 
    this.odometer += maxDistance
    //Can't have negative fuel. 
    this.fuel = 0
    return "You're out of gas."
  }

  //Can't have negative miles driven.
  else if (miles < 0){
    return "Nice try, Ferris."
  }

  // At this point you've got fuel in the car, 
  // you're not driving farther than fuel can support,
  // and you're not trying to drive negative miles. 
  // So you can just update the odometer and the fuel accordingly. 
  else {
  //add the miles driven to the odometer
  this.odometer += miles;
  //update the fuel tank to refelct the gallons used 
  this.fuel -= (miles / this.mpg)
  return `You now have driven ${this.odometer} miles. You now have ${this.fuel} gallons left`
  }
}
}

if(typeof describe === 'function'){

  describe("Car", function(){
    it("creates a car with an id, mpg, tank capacity, odometer at 0, and fuel at 0",function(){
      let newCar = new Car("vin",5,10);
      assert.equal(newCar.id,"vin")
      assert.equal(newCar.mpg, 5);
      assert.equal(newCar.capacity,10);
      assert.equal(newCar.odometer,0);
      assert.equal(newCar.fuel,0);
    })
  })

  describe("methods drive and addFuel", function (){
    it("does NOT drive without putting fuel in", function(){
      let newCar = new Car("vin",5,10);
      newCar.drive(2);
      assert.equal(newCar.odometer, 0)
      newCar.addFuel(1)
      newCar.drive(2);
      assert.equal(newCar.odometer,2)
  })

  it("drives after adding fuel", function(){
    let newCar = new Car("vin",20,10);
    newCar.addFuel(5);
    assert.equal(newCar.fuel, 5);
    newCar.drive(80); 
    assert.equal(newCar.fuel,1) 
  
  })

  it("does NOT drive after I am out of fuel", function(){
    let newCar = new Car("vin", 20, 10) ;
    newCar.addFuel(5);
    newCar.drive(80);
    assert.equal(newCar.fuel,1);
    newCar.drive(40);
    assert.equal(newCar.odometer,100)
    assert.equal(newCar.fuel,0)
    console.log(newCar.drive(40))

  })

  it("does NOT let me put more fuel than the capacity", function() {
    let newCar = new Car("vin",20,10)
    newCar.addFuel(11);
    assert.equal(newCar.fuel, 10)
    console.log(newCar.addFuel(11))
  })
});
}

