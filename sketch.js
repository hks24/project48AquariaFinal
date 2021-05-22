var mermaid1,mermaid2;
var spaceCraft;
var Aquaria;
var gameState,score;
var img;
var activeWeapon;
var getframecount;
var mermaidPos;


function preload(){
  
mermaidImg1 = loadImage("img1.png");
mermaidImg2 = loadImage("img2.png")

backgroundImg = loadImage("universeImg3.jpg");
aquariaImg = loadImage("planet.png");
gunImg1 = loadImage("swordImg.png");
rotatedgunImg1 = loadImage("rotatedsword1.png");
rotatedgunImg2 = loadImage("rotatedswordimage2.png");
gunImg2 = loadImage("tridentImg.png");
gunImg3 = loadImage("sword2.png");
gunImg4 = loadImage("magicBall.png");
spaceshipImg = loadImage("spaceship7.png");
spaceshipImg2 = loadImage("spaceship5.png");
spaceshipImg3 = loadImage("spaceship4.png");
spaceshipImg4 = loadImage("spaceship8.png");

rotatedSword2R = loadImage("rotatedRightSword2.png");
rotatedSword2L = loadImage("rotatedLeftSword2.png");

tridentL = loadImage("tridentLeft.png");
tridentR = loadImage("tridentRight.png");


//aquariaTheme = loadSound("aquaria sounds/aquariaTheme.mp3");
bombSound = loadSound("aquaria sounds/bomb.mp3")
swordSound = loadSound("aquaria sounds/swordSound.mp3")
explosion = loadSound("aquaria sounds/explosion.mp3")
fireSound = loadSound("aquaria sounds/fireball.mp3")

}

function setup(){
createCanvas(1200,800);

//aquariaTheme.play();

Aquaria = createSprite(600,400,200,200);
Aquaria.addImage(aquariaImg);

mermaid1 = createSprite(600,350,50,50);
mermaid1.addImage(mermaidImg1);
mermaid1.scale = 0.5;
mermaid1.shapeColor = "red";

mermaid2 = createSprite(600,450,50,50);
mermaid2.addImage(mermaidImg2);
mermaid2.scale = 0.5;
mermaid2.shapeColor = "red";

gun1 = createSprite(100,120,20,20);
gun1.addImage(gunImg1);
gun1.scale = 0.8

gun2 = createSprite(160,120,20,20);
gun2.addImage(gunImg2);
gun2.scale = 0.8;

gun3 = createSprite(220,120,20,20);
gun3.addImage(gunImg3);

gun4 = createSprite(260,120,20,20);
gun4.addImage(gunImg4);
gun4.scale = 0.5

gun5 = createSprite(100,120,20,20);
gun5.addImage(gunImg1);
gun5.scale = 0.8


gun6 = createSprite(160,120,20,20);
gun6.addImage(gunImg2);
gun6.scale = 0.8;

gun7 = createSprite(220,120,20,20);
gun7.addImage(gunImg3);

gun8 = createSprite(260,120,20,20);
gun8.addImage(gunImg4);
gun8.scale = 0.5

gameState = "start";

spaceCraftGroup = new Group();
weaponGroup = new Group();

weaponGroup.add(gun1)
weaponGroup.add(gun2)
weaponGroup.add(gun3)
weaponGroup.add(gun4)
weaponGroup.add(gun5)
weaponGroup.add(gun6)
weaponGroup.add(gun7)
weaponGroup.add(gun8)




activeWeapon = 0
score = 0;
mermaidPos = 1;



}

function draw(){

if(gameState === "start"){
  background("black")

  strokeWeight(2);
  stroke("white");
  fill("white")
  textSize(50);
  textFont("algerian")
  text("Aquaria",500,50);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(20);
  textFont("timesNewRoman")
  text("Aquaria is a planet made of water where many mermaids live. The water here is very much precious and can cure any disease  ",100,100)
  
  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(20);
  textFont("timesNewRoman");
  text("in the universe. When humans came to know this they planned to attack Aquaria with their high quality spaceships. Now your",100,130);
  
  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(20);
  textFont("timesNewRoman")
  text("goal is to help the mermaids to fight from humans and save the planet.",350,160);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(40);
  textFont("timesNewRoman");
  text("ALL THE BEST",480,220);


  push();
  stroke("white")
  fill("white")
  line(0,250,1200,250);
  pop();

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(30);
  textFont("arabia")
  text("Rules and Controls",480,300);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia");
  text("change the position of the mermaids by right and up arrow key",180,350)

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("attack on spacecrafts before they enter aquaria by pressing space key",180,385);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("press 1 to take sword 1 as the weapon ",180,420);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("press 2 to take trident as the weapon",180,455);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("press 3 to take sword 2 as a weapon",180,490);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("press 4 to take fireball as the weapon",180,525);

  strokeWeight(1);
  stroke("white");
  fill("white")
  textSize(25);
  textFont("arabia")
  text("press W key on your keyboard to continue",180,560);

  if(keyDown("w")){
    gameState = "play";
  }

}



if(gameState === "play"){

  background(backgroundImg);

  if(keyDown(RIGHT_ARROW)){
    mermaid1.x = 650;
    mermaid1.y = 400;
    mermaid2.x = 550;
    mermaid2.y = 400;
    mermaidPos = 2
  }
  
  if(keyDown(UP_ARROW)){
    mermaid1.x = 600;
    mermaid1.y = 350;
    mermaid2.x = 600;
    mermaid2.y = 450;
    mermaidPos = 1
  }
  spawnSpaceCrafts();

  createLasers();
  
  chooseWeapon();

  if(weaponGroup.isTouching(spaceCraftGroup)){
    spaceCraftGroup.destroyEach();
    score = score+1;
    bombSound.play();
  }

  if(spaceCraftGroup.isTouching(Aquaria)){
    explosion.play();
    gameState = "end";
    
  }



  

  drawSprites();

  if(gameState === "end"){
    background("black");
    spaceCraftGroup.destroyEach();
    weaponGroup.destroyEach();
    Aquaria.destroy();
    mermaid1.destroy();
    mermaid2.destroy();
    
  }

  textSize(30);
  stroke("white")
  fill("white");
  text("score: "+score,750,50);

  
}



}

function spawnSpaceCrafts(){
  if(frameCount%200===0){
    spaceCraft = createSprite(100,100,100,100);

    var position = Math.round(random(1,4));
    if(position === 1){
      spaceCraft.x = 600;
      spaceCraft.y = 0;
      spaceCraft.velocityY = 5;
      spaceCraft.addImage(spaceshipImg4);
      spaceCraft.scale = 0.5;
    
    }
    if(position ===2){
      spaceCraft.x = 600;
      spaceCraft.y = 800;
      spaceCraft.velocityY = -5;
      spaceCraft.addImage(spaceshipImg3);
      spaceCraft.scale = 0.5

    }
    if(position === 3){
      spaceCraft.x = 0;
      spaceCraft.y = 400;
      spaceCraft.velocityX = 5;
      spaceCraft.addImage(spaceshipImg);
      spaceCraft.scale = 0.7;

    }
    if(position === 4){                                                                        
      spaceCraft.x = 1200;
      spaceCraft.y = 400;
      spaceCraft.velocityX = -5;
      spaceCraft.addImage(spaceshipImg2);
      spaceCraft.scale = 0.7;
    }
    spaceCraftGroup.add(spaceCraft);
  }
 
}

function chooseWeapon(){

  if(keyDown("1")){
   gun1.x = mermaid1.x - 30;
   gun1.y = mermaid1.y;
   gun1.scale = 0.5;

   gun2.x =160;
    gun2.y = 120;

     gun3.x = 220;
      gun3.y = 120; 

      gun4.x = 260; 
      gun4.y = 120;

      gun5.x = mermaid2.x+30;
      gun5.y = mermaid2.y;
      gun5.scale = 0.5

      gun6.x =160;
      gun6.y = 120;

       gun7.x = 220;
        gun7.y = 120
        ; 
        gun8.x = 260; 
        gun8.y = 120;

        activeWeapon = 1;

      
   
     //img = image(gunImg1,650,450);


   
  }

  if(keyDown("2") ){
    gun2.x = mermaid1.x - 30;
    gun2.y = mermaid1.y;
    gun2.scale = 0.5;
    gun1.x = 100;
     gun1.y = 120;
      gun3.x = 220;
       gun3.y = 120;
        gun4.x = 260;
         gun4.y = 120;
         gun6.x = mermaid2.x+30;
         gun6.y = mermaid2.y; 
         gun6.scale = 0.5
         gun5.x = 100;
     gun5.y = 120;
      gun7.x = 220;
       gun7.y = 120;
        gun8.x = 260;
         gun8.y = 120;

         activeWeapon = 2
        
         
     //img = image(gunImg2,650,450);
        

   }

   if(keyDown("3") ){
    gun3.x = mermaid1.x - 30;
    gun3.y = mermaid1.y;
    gun3.scale = 0.5; 
    gun1.x = 100;
     gun1.y = 120;
    gun2.x = 160;
    gun2.y = 120;
    gun4.x = 260;
     gun4.y = 120;
     gun7.x = mermaid2.x+30;
     gun7.y = mermaid2.y;
     gun7.scale = 0.5
     gun5.x = 100;
     gun5.y = 120;
    gun6.x = 160;
    gun6.y = 120;
    gun8.x = 260;
     gun8.y = 120;
     activeWeapon = 3
     
       //img = image(gunImg3,650,450);

   }

   if(keyDown("4")){
    gun4.x = mermaid1.x - 30;
    gun4.y = mermaid1.y;
    gun4.scale = 0.3; 
    gun1.x = 100;
     gun1.y = 120;
      gun2.x = 160;
       gun2.y = 120;
        gun3.x = 220; 
        gun3.y = 120;
        gun8.x = mermaid2.x+30;
        gun8.y = mermaid2.y;
        gun8.scale = 0.3
        gun5.x = 100;
        gun5.y = 120;
         gun5.x = 160;
          gun5.y = 120;
           gun7.x = 220; 
           gun7.y = 120;
           activeWeapon = 4

        
      //img = image(gunImg4,650,450);
   }
}

function createLasers(){

 if(keyDown("space") && activeWeapon === 1 ){
   getframecount=frameCount;

   if(mermaidPos === 1 ){
    gun1.addImage(gunImg1);
    gun5.addImage(gunImg1);
   gun1.velocityY = -5;
   gun5.velocityY = 5;
   }
   else if(mermaidPos === 2){
    gun1.addImage(rotatedgunImg1);
    gun5.addImage(rotatedgunImg2);
    gun1.velocityX = -5;
    gun5.velocityX = 5;
    }

    swordSound.play();

 }
 if(frameCount>=getframecount+60 && activeWeapon === 1 ){
  gun1.velocityY = 0
  gun5.velocityY = 0
  gun1.velocityX = 0
  gun5.velocityX = 0

   gun1.x = mermaid1.x-30
   gun1.y = mermaid1.y;

   gun5.x = mermaid2.x+30;
   gun5.y = mermaid2.y;
 }

 if(keyDown("space") && activeWeapon === 2){
  getframecount=frameCount;
  
  if(mermaidPos === 1){
    gun2.addImage(gunImg2);
    gun6.addImage(gunImg2);
  

    gun2.velocityY = -5;
    gun6.velocityY = 5;
    }

    else if(mermaidPos === 2){
      gun2.addImage(tridentL);
    gun6.addImage(tridentR);
     
     gun2.velocityX = -5;
     gun6.velocityX = 5;
     }

     swordSound.play();
 

}
if(frameCount>=getframecount+60 && activeWeapon === 2){
  gun2.velocityY = 0
  gun6.velocityY = 0;
  gun2.velocityX = 0
  gun6.velocityX = 0;

  gun2.x = mermaid1.x-30
  gun2.y = mermaid1.y;

  gun6.x = mermaid2.x+30;
  gun6.y = mermaid2.y;
}
if(keyDown("space") && activeWeapon === 3){
  getframecount=frameCount;

  if(mermaidPos === 1){
    gun3.addImage(gunImg3);
    gun7.addImage(gunImg3);
    gun3.velocityY = -5;
    gun7.velocityY = 5;
    }
    else if(mermaidPos === 2){
      gun3.addImage(rotatedSword2L);
      gun7.addImage(rotatedSword2R);
     gun3.velocityX = -5;
     gun7.velocityX = 5;
     }
     swordSound.play();
}
if(frameCount>=getframecount+60 && activeWeapon === 3 ){
  gun3.velocityY = 0;
  gun7.velocityY = 0;
  gun3.velocityX = 0;
  gun7.velocityX = 0;

  gun3.x = mermaid1.x-30
  gun3.y = mermaid1.y;

  gun7.x = mermaid2.x+30;
  gun7.y = mermaid2.y;
}
if(keyDown("space") && activeWeapon === 4){
  getframecount=frameCount;

  if(mermaidPos === 1){
    gun4.velocityY = -5;
    gun8.velocityY = 5;
    }
    else if(mermaidPos === 2){
     gun4.velocityX = -5;
     gun8.velocityX = 5;
     }
   fireSound.play();
}
if(frameCount>=getframecount+60  && activeWeapon === 4){
  gun4.velocityY = 0;
  gun8.velocityY = 0
  gun4.velocityX = 0;
  gun8.velocityX = 0;

  gun4.x = mermaid1.x-30
  gun4.y = mermaid1.y;

  gun8.x = mermaid2.x+30;
  gun8.y = mermaid2.y;
}

}














