var barco,barcoimg;
var mar,marimg;
function preload(){
 barcoimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 marimg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  mar=createSprite(200,200,400,200)
  mar.addImage("mar",marimg)
  mar.scale=0.5
  mar.velocityX=-4

  barco=createSprite(120,190,30,35)
  barco.addAnimation("navegando",barcoimg)
  barco.scale=0.3
}

function draw() {
  background("blue");
  if(mar.x<100){
    mar.x=mar.width/4
  }
  

    drawSprites();
  
  
  

}
