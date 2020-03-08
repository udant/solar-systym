class star{
    constructor(){
      this.xPosition=100;
      this.yPosition=100;
      this.radius=10;
      this.fillColor = "red";
    }
    display(){
      fill(this.fillColor);
      circle(this.xPosition,this.yPosition,this.radius);
    }
}
