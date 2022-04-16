var block
function setup() {
  createCanvas(1000,500);
   block=createSprite(75,80,100,100)
}

function draw() 
{
  background(30);
   if(keyDown(UP_ARROW)){
     block.y-=5
   }
   
   
   if(keyDown(DOWN_ARROW)){
    block.y+=5
  }
  
  if(keyDown(LEFT_ARROW)){
    block.x-=5
  }

  if(keyDown(RIGHT_ARROW)){
    block.x+=5
  }


  drawSprites()
}




