var cat,catImage,cat2,catImage2,cat3,catImage3;
var mouse,mouseImage,mouse2,mouseImage2,mouse3,mouseImage3;
var back,backImage;

function preload() {
    backImage=loadImage("images/garden.png");
   catImage=loadAnimation("images/tomOne.png");
    catImage2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImage3=loadAnimation("images/tomFour.png");
    
    mouseImage=loadAnimation("images/jerryOne.png");
    mouseImage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImage3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,650);

   cat=createSprite(900,470,50,50);
   cat.addAnimation("catRunning",catImage);
   cat.scale=0.2;

   cat2=createSprite(700,500,50,50);
   cat2.addAnimation("catRunning",catImage2);
   cat2.velocityx=2;
   cat2.scale=0.2;
    
   cat3=createSprite(500,500,50,50);
   cat3.addAnimation("catRunning",catImage3);
   cat3.scale=0.2;

   mouse=createSprite(400,500,50,50);
   mouse.addAnimation("Playing",mouseImage);
   mouse.scale=0.2;

   mouse2=createSprite(400,500,50,50);
   mouse2.addAnimation("Playing",mouseImage2);
   mouse2.scale=0.2;

   mouse3=createSprite(400,500,50,50);
   mouse3.addAnimation("playing",mouseImage3);
   mouse3.scale=0.2;

}

function draw() {
   background(backImage);

   if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat2.addAnimation("catRunning",catImage2);
    cat2.changeAnimation("catRunning",catImage3);

    mouse2.addAnimation("catRunning",mouseImage2);
    mouse2.changeAnimation("catRunning",mouseImage3);
   }
else{
  cat2.addAnimation("catRunning",catImage2);
  mouse2.addAnimation("catRunning",mouseImage2);
}
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat2.velocityX = -5;
      cat2.addAnimation("catRunning",catImage2);
      cat2.changeAnimation("catRunning",catImage3);
 }
}