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
  createCanvas(1400,1400);
  background("white");

  sun = new star();
  sun.xPosition = 450;
  sun.yPosition = 250;
  sun.radius = 40;
  
  mercury = new planet();
  mercury.x=400;
  mercury.y=500;
  mercury.theta = 47;
  mercury.r = 50;
  mercury.speed = 1 * speed_star;  

  venus = new planet();
  venus.x=500;
  venus.y=600;
  venus.theta = 47.87;
  venus.r = 70;
  venus.speed = 2 * speed_star; 

  earth = new planet
  earth.x=700;
  earth.y=800;
  earth.theta = 47.87;
  earth.r = 90;
  earth.speed = 3 * speed_star; 

  mars = new planet
  mars.x=800;
  mars.y=900;
  mars.theta = 47.87;
  mars.r = 110;
  mars.speed = 4 * speed_star; 

  jupitar = new planet
  jupitar.x=900;
  jupitar.y=1000;
  jupitar.theta = 47.87;
  jupitar.r = 130;
  jupitar.speed = 5 * speed_star; 

  saturn = new planet
  saturn.x=1000;
  saturn.y=1100;
  saturn.theta = 47.87;
  saturn.r = 150;
  saturn.speed = 6 * speed_star; 

  uranus = new planet
  uranus.x=1100;
  uranus.y=1200;
  uranus.theta = 47.87;
  uranus.r = 170;
  uranus.speed = 7 * speed_star; 

  neptune = new planet
  neptune.x=1200;
  neptune.y=1300;
  neptune.theta = 47.87;
  neptune.r = 190;
  neptune.speed = 8 * speed_star; 

  pluto = new planet
  pluto.x=1300;
  pluto.y=1400;
  pluto.theta = 47.87;
  pluto.r = 210;
  pluto.speed = 9 * speed_star; 
//create new planet and assign properties; 

 }

function draw() {
  background("black"); //comment for visualising planet path
  sun.display();
  mercury.display();
  venus.display();
  earth.display();
  mars.display();
  jupitar.display();
  saturn.display();
  uranus.display();
  neptune.display();
  pluto.display();
 /* sun.debug = true;
  venus.debug = true;
  mercury.debug = true;*/
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
      else if(isTouching(sun,earth)){
           console.log("Destroy the planet");
           destroy(earth);
           }  
     else if(isTouching(sun,mars)){
            console.log("Destroy the planet");
            destroy(mars);
              }     
      else if(isTouching(sun,jupitar)){
                console.log("Destroy the planet");
                destroy(jupitar);
           }          
      else if(isTouching(sun,saturn)){
            console.log("Destroy the planet");
            destroy(saturn);
       } 
       else if(isTouching(sun,uranus)){
        console.log("Destroy the planet");
        destroy(uranus);
       } 
       else if(isTouching(sun,neptune)){
        console.log("Destroy the planet");
        destroy(neptune);
       }        
       else if(isTouching(sun,pluto)){
        console.log("Destroy the planet");
        destroy(pluto);
       }           

  }
  drawSprites();
}
