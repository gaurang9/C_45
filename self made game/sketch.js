var commodus , macro, choco, soldier1 , soldier2 ;
var commoduspic , macropic , soldier1pic , soldier2pic;
var castle ,castlepic , general ,generalpic, level1pic, level2pic;
var level3pic;
var end,play,gameState
function preload(){
 commoduspic = loadImage("commodus-removebg-preview(4).png");
macropic = loadImage("hercules-removebg-preview.png")
soldier1pic = loadImage("soldier0.5.png")
soldier2pic = loadImage("w1.png")
castlepic = loadImage("castle.jpg")
level1pic = loadImage("-1.jpg")
level2pic = loadImage("-2.jpg")
level3pic = loadImage("-3.jpg")
}
function setup() {
  createCanvas(600,600);
  castle=createSprite(200,200,50,50);
  castle.addImage("jhkknlk",castlepic);
  end=0
  play=1
gameState=play

}

function draw() {
  background(255);  
  rect=(600,400,500,500)
  /*if(gameState===play){
castle.velocityX=-2;
  
  if(castle.x<0){
  castle.x=castle.width/2
  }
}*/
  drawSprites();
}