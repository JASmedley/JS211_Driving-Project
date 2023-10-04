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
 this.fuel +=  gallons
    console.log(`You now have ${this.fuel} gallons`)
}

//Update to ensure you can't drive farther than fuel can support
//Miles driven can't be greater than available fuel. 
//Can't have negative fuel. 
//Can't have negative miles driven.
drive = (miles) => {
 this.odometer += miles;
 this.fuel -= (miles / this.mpg)
  console.log(`You now have driven ${this.odometer} miles`)
  console.log(`You now have ${this.fuel} gallons left`)

}

}

const Camry = new Car("vin",10,12);
Camry.addFuel(1)
Camry.drive(5);


if(typeof describe == 'function') {

  describe("Create some cars", function(){
    it("test1",function(){
      let c = new Car("vin",5,10);
      assert.equals(c.id,1)
      assert.equal(c.capacity, 10);
      assert.equal(c.odometer,0);
      assert.equal(c.fuel,0);
      assert.equal(c.mpg, 5);
    })
  })

  describe("Drive and add fuel", function (){
    it("drive1", function(){
      let car1 = new Car("vin",17,10);
      car1.drive(2);
      assert.equal(car1.odometer, 0, "wrong odometer reading")
      assert.equal(car1.odometer, 0, "wrong fuel reading")})
  })

  it("dirving after adding fuel", function(){
    let car1 = new Car("vin",17,10);
    car1.addFuel(5);
    assert.equal(car1.fuel, 5);
    car1.drive(34); 
    assert.equal(car1.fuel,) 
  
  })

  it("driving after I am out of fuel", function(){
    let car = new Car("vin", 17, 10) ;
    car.addFuel(10);
    car.drive(170);

    assert.equal(car.fuel,0);
    drive(1);
    assert.equal(car.odometer,170)
    assert.equal(car.fuel,0)
  })

  it("put too much fuel", function() {
    let car2 = new Car(12,17,10)
    assert.equal(car2.addFuel(12));
    assert.equal(car2.fuel, 10)
  })
}

