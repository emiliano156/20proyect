var spaceImg, spcae;
var meteoriteImg, meteorite, meteoritesGroup;
var spaceship, spaceshipImg;
var gameState = "play"

function preload(){
  spaceImg = loadImage("space.jpg");
  meteoriteImg = loadImage("meteorite.jpg");
  spaceshipImg = loadImage("spcaeship.png");
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  

meteoritesGroup = new Group();


spaceship = createSprite(200,200,50,50);
spaceship.scale= 0.3;
spaceship.addImage("spaceship",spaceshipImg);

}

function draw() {
  background(200);
  
if(gameState=="play"){
if(keyDown("left_arrow")){
spaceship.x=spaceship.x-3;
}

if(keyDown("right_arrow")){
spaceship.x=spaceship.x+3;
}

if(keyDown("space")){
    spaceship.velocityY=-10
}

spaceship.velocityY=spaceship.velocityY+0.8

if(space.y > 400){
    space.y = 300
  }

  spawnmeteorites()

  if(meteoritesGroup.isTouching(spaceship)){
spaceship.velocityY=0
  }

  if(meteoritesGroup.isTouching(spaceship) || spaceship.y>600){
spaceship.destroy();
gameState="over"
  }

  drawSprites();
}

  if(gameState=="over"){
    stroke("red");
    fill("red");
    textSize(35);
    text("GAME OVER",230,250);
  }
   
}

 function spawnmeteorites(){
    if(frameCount%240==0){

meteorite = createSprite(200,10);


meteorite.x=Math.round(random(120,400));
meteorite.x=door.x;


meteorite.addImage(meteoriteImg);



meteorite.velocityY=1;


spaceship.depth;
spaceship.depth+=1;


meteorite.lifetime=800;



meteoritesGroup.add(meteorite);

    }
 }