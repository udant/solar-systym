

function isTouching(object1,object2){
    if(object1.radius+object2.r>=(object1.xPosition-object2.x)/2 && object1.radius+object2.r>=(object1.yPosition-object2.y)/2){
     return true; 
    }
    else{
      return false;
    }
  }

function destroy(object1){
  object1.r=0;
  object1.x=0;
  object1.y=0;
}
