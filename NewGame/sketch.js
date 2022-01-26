var bg, bgImg, player, playerImg

function preload(){
  
  bgImg=loadImage('images/road.jpg')
  playerImg=loadImage('images/player.png')

}

function setup() {

  createCanvas(windowWidth,windowHeight);

 bg=createSprite(windowWidth/2,windowHeight/2)
 bg.addImage(bgImg)

 bg.velocityY=5
 
 player=createSprite(windowWidth/2,windowHeight-150)
 player.addImage(playerImg)
 player.scale=.25
 player.rotation=270

}

function draw() {
  background(0); 

  if(bg.y>windowHeight+500){
    bg.y=windowHeight/2
  }
 

  
drawSprites();

}
