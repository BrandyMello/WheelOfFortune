import data from '../src/data';
//Wheel is a class with access to the data correlated to the wheel options.

//a property of this class can be wheelData where the array of the entirety of options for the wheel are stored --- this will be found via a method -
// the method to find the entirety of wheelData can be findWheelData

  //findWheelData will go into the data array and pull out the one array correlated with this wheel. 

//will need a currentWheel property correlated to the current wheel dispayed on the dom --- will need method
  //generateCurrentWheel to randomly pull out a minumum of six options, store the return value in currentWheel property

//We will need a property to hold the value of what the wheel lands on when it stops after each spin (wheelPrize) via a method

// a method to spin the wheel - chooseWheelPrize (spins the wheel) that returns a value correlated to the wheelPrize that is currently available for this turn. 
    //this method should be able to take an argument for which data Wheel array to randomize
//set this return value to the wheelPrize property

//dom needs to "land on" wheelPrize and display the potential prize. 

// spinWheel will be called from the Turn class when a player clicks the spin button
//and that will really just call the findWheelPrize method inside of Wheel Class

//will need to create a bonus wheel data set and store it as a property 
  //that property can be set equal to the invocation of findWheelPrize with an argument of the data array bonusWheelData
// should be able to invoke the findWheelPrize method
//store findWheelPrize as another property -- (bonusWheelPrize)

class Wheel {
  constructor() {
    this.wheelData = this.findWheelData();
    this.bonusWheelData = [];
    this.currentWheel = this.generateCurrentWheel();
    this.wheelPrize;
    console.log(this.wheelPrize)
  }

    findWheelData() {
    return data.wheel
    }

    generateCurrentWheel() {
      let max = this.wheelData.length - 6;
      let randomIndex = Math.floor(Math.random() * Math.floor(max));
      let randomWheel = (this.wheelData.slice(randomIndex,randomIndex + 6))
      return randomWheel;
    }

    chooseWheelPrize() {
      let randomIndex = Math.floor(Math.random() * Math.floor(6));
      let randomPrize = this.currentWheel[randomIndex]
      this.wheelPrize = randomPrize;
    }



  
}

export default Wheel;

