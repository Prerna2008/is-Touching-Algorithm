var movingRect, fixRect;
function setup() {
  createCanvas(800,400);
  
  fixRect=createSprite(200,300,50,80);
  fixRect.shapeColor="green";
  movingRect = createSprite(400,300,50,80);
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2&&
    fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2&&
    movingRect.y-fixRect.y<movingRect.width/2+fixRect.width/2&&
    fixRect.y-movingRect.y<movingRect.width/2+fixRect.width/2){
    fixRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  else{
    fixRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  console.log(movingRect.x-fixRect.x);
  drawSprites();
}