
class Wheel {
  constructor(data) {
    this.wheelData = data.wheel;
    this.currentWheel;
  }

 generateCurrentWheel() {
      let max = this.wheelData.length - 6;
      let randomIndex = Math.floor(Math.random() * Math.floor(max));
      let randomWheel = (this.wheelData.slice(randomIndex,randomIndex + 6))
      this.currentWheel = randomWheel;
      return this.currentWheel;   
  }
}

export default Wheel;

