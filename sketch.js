var fixedRect, movingRect;
var t1, t2, t3, t4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  t1 = createSprite(700,200,70,20);
  t1.shapeColor = "blue";

  t2 = createSprite(500,200,20,70);
  t2.shapeColor = "black";
  t2.velocityX = -5;


  t3 = createSprite(400,200,60,10);
  t3.shapeColor = "white";

  t4 = createSprite(300,200,10,60);
  t4.shapeColor = "grey";
  t4.velocityX = 5;
}

function draw() {
  background("Yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(t1, movingRect)){
  
    movingRect.shapeColor = "orange";
    t1.shapeColor = "red";



  }

  else{
    movingRect.shapeColor = "red";
    t1.shapeColor = "orange";

  }

  if (isTouching(t3, movingRect)){
  
    movingRect.shapeColor = "orange";
    t3.shapeColor = "turquoise";



  }

  else{
    movingRect.shapeColor = "red";
    t3.shapeColor = "turquoise";

  }  

  bounceOff(t2,t4);
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}



}

function bounceOff(object1, object2){

if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){

  object1.velocityX = object1.velocityX*(-1);
  object2.velocityX = object2.velocityX*(-1);
  }

if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){

    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);


}


}