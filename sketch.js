var astronaut;
var bath;
var brush;
var drink;
var eat;
var gym;
var move;
var sleep;
var bg;

function preload()
{
  brush = loadAnimation("brush.png");
  bath = loadAnimation("bath1.png","bath2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.ng","gym2.png","gym11.png","gym12.png");
  bg = loadImage("iss.png");
  move = loadAnimation("move.png","move2.png");
  sleep = loadAnimation("sleep.png");
}

function setup()
 {
  createCanvas(800,400);
  
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeing",sleep);
}

function draw()
 {
  background(255,255,255);  

  if (keyDown(UP_ARROW))
  {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(DOWN_ARROW))
  {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW))
  {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eaing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(RIGHT_ARROW))
  {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("r"))
  {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("b"))
  {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimaion("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("d"))
  {
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  drawSprites();
}
