const speed_star = 0.9;
const alpha = 30;
const aplha_habital = 25;


var sun;

var mercury;
var venus;
var earth;
var mars;
var jupitar;
var saturn;
var uranus;
var neptune;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
var pluto;
var i=0;

var pluto_x=400;
var pluto_y=400;
var pluto_theta = 25.70;
var pluto_r = 360;
var speed_pluto =2 * speed_star;

function setup() {
  createCanvas(600,600);
  background("white");

  sun = new star();
  sun.xPosition = 450;
  sun.yPosition = 250;
  sun.radius = 40;
  
  mercury = new planet();
  mercury.x=400;
  mercury.y=500;
  mercury.theta = 47;
  mercury.r = 80;
  mercury.speed = 1 * speed_star;  

  venus = new planet();
  venus.x=500;
  venus.y=600;
  venus.theta = 47.87;
  venus.r = 120;
  venus.speed = 2 * speed_star; 

  /*earth = new planet
  earth.x=400;
  earth.y=400;
  earth.theta = 47.87;
  earth.r = 20;
  earth.speed = 0.04787 * speed_star; 

  mars = new planet
  mars.x=400;
  mars.y=400;
  mars.theta = 47.87;
  mars.r = 20;
  mars.speed = 0.04787 * speed_star; 

  jupitar = new planet
  jupitar.x=400;
  jupitar.y=400;
  jupitar.theta = 47.87;
  jupitar.r = 20;
  jupitar.speed = 0.04787 * speed_star; 

  saturn = new planet
  saturn.x=400;
  saturn.y=400;
  saturn.theta = 47.87;
  saturn.r = 20;
  saturn.speed = 0.04787 * speed_star; 

  uranus = new planet
  uranus.x=400;
  uranus.y=400;
  uranus.theta = 47.87;
  uranus.r = 20;
  uranus.speed = 0.04787 * speed_star; 

  neptune = new planet
  neptune.x=400;
  neptune.y=400;
  neptune.theta = 47.87;
  neptune.r = 20;
  neptune.speed = 0.04787 * speed_star; 

  pluto = new planet
  pluto.x=400;
  pluto.y=400;
  pluto.theta = 47.87;
  pluto.r = 20;
  pluto.speed = 0.04787 * speed_star; 

//create new planet and assign properties; */

 }

function draw() {
  //background("white"); //comment for visualising planet path
  sun.display();
  mercury.display();
  venus.display();
   if(frameCount % 80 ===0){ 
      sun.radius=sun.radius+20;
      sun.display();  
      if(isTouching(sun,mercury)){
        console.log("Destroy the planet");
        destroy(mercury);
        }
      else if(isTouching(sun,venus)){
          console.log("Destroy the planet");
          destroy(venus);
          }  
  }
  drawSprites();
}
