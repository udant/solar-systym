class planet{
    constructor(){
         this.x=400;
         this.y=400;
         this.theta = 1;
         this.r = 20;
         this.speed = 0.04787 * 1;  
    }
      display(){
      
        this.x=+this.r*cos(this.theta);
        this.y=+this.r*sin(this.theta);
        circle(this.x+450,this.y+250,20);
        this.theta = this.theta + this.speed;
      } 
      destroy(){

        
      }
}



 