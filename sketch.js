var movingRect,fixedRect;
function setup (){

  createCanvas (2000,1000);
  movingRect=createSprite (400,500,200,100);
  
  fixedRect=createSprite (900,500,100,300);

  rect1=createSprite (1500,500,100,200);

  rect2=createSprite (500,500,200,100);
}


function draw (){
  background(180);
  drawSprites();


  movingRect.y=mouseY;
  movingRect.x=mouseX;

  movingRect.depth=fixedRect.depth;
  textSize (20);
  fill ("red");
  text("Moving rect X="+movingRect.x,200,200);

  text("Fixed rect X="+fixedRect.x,200,230);
  text("Both rect x pos diff="+(fixedRect.x-movingRect.x),200,260);
  text("Both rect y pos diff="+(fixedRect.y-movingRect.y),200,290);
  text("Moving rect height"=+movingRect.height,200,320);
  text("Moving rect widht"=+movingRect.widht,200,350);
  text("Fixed rect height"=+fixedRect.height,200,410);
  text("Fixed rect widht"=+fixedRect.widht,200,440);

  if (isTouching(movingRect,fixedRect)){

movingRect.shapeColor="red";
fixedRect.shapeColor="red";

  } else if (isTouching(movingRect,rect1)){

    movingRect.shapeColor="red";
    rect1.shapeColor="red";
  } else if (isTouching(movingRect,rect2)) {

    movingRect.shapeColor="red";
    rect2.shapeColor="red";
  } else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    rect1.shapeColor="green";
    rect2.shapeColor="green";

  }
}


function isTouching (obj1,obj2){

  if (obj2.x-obj1.x<(obj2.widht+obj1.widht)/2&&obj1.x-obj2.x<(obj1.widht+obj2.widht)/2
  &&obj1.y-obj2.y<(obj2.height+obj1.height)/2&&obj2.y-
  obj1.y<(obj2.height+obj1.height)/2){
    return true
  } else {
    return false
  }
}