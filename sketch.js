var bunny,carrot,edges;
function preload(){

}
function setup(){
createCanvas(1250,600);
bunny=createSprite(50,550,45,50);
bunny.shapeColor="pink";
carrot=createSprite(1200,50,40,75);
carrot.shapeColor="crimson";
edges=createEdgeSprites();

obs1 = createSprite(50,300,150,25);
obs1.shapeColor="brown";
obs2 = createSprite(300,300,150,25);
obs2.shapeColor="brown";
obs3 = createSprite(550,300,150,25);
obs3.shapeColor="brown";
obs4 = createSprite(800,300,150,25);
obs4.shapeColor="brown";
obs5 = createSprite(1050,300,150,25);
obs5.shapeColor="brown";
obs20 = createSprite(1300,300,150,25);
obs20.shapeColor="brown";

obs6 = createSprite(150,400,150,25);
obs6.shapeColor="brown";
obs7 = createSprite(400,400,150,25);
obs7.shapeColor="brown";
obs8 = createSprite(650,400,150,25);
obs8.shapeColor="brown";
obs9 = createSprite(900,400,150,25);
obs9.shapeColor="brown";
obs10 = createSprite(1150,400,150,25);
obs10.shapeColor="brown";

obs11 = createSprite(150,200,150,25);
obs11.shapeColor="brown";
obs12 = createSprite(400,200,150,25);
obs12.shapeColor="brown";
obs13 = createSprite(650,200,150,25);
obs13.shapeColor="brown";
obs14 = createSprite(900,200,150,25);
obs14.shapeColor="brown";
obs15 = createSprite(1150,200,150,25);
obs15.shapeColor="brown";

}
function draw(){
background("lime");
drawSprites();
if(keyDown("right")){
bunny.velocityX=+5;
bunny.velocityY=0;
}
else if(keyDown("left")){
    bunny.velocityX=-5;
    bunny.velocityY=0;
}
else if(keyDown("down")){
    bunny.velocityY=+5;
    bunny.velocityX=0;
}
else if(keyDown("up")){
    bunny.velocityY=-5;
    bunny.velocityX=0;
}  

bunny.collide(edges);



if(bunny.isTouching(obs1)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs2)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs3)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs4)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs5)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs6)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs7)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs8)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs9)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}else if(bunny.isTouching(obs20)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}

else if(bunny.isTouching(obs10)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs12)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs11)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}else if(bunny.isTouching(obs13)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}
else if(bunny.isTouching(obs14)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}

else if(bunny.isTouching(obs15)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=50;
    bunny.y=550;
}

else if(bunny.isTouching(carrot)){
    bunny.velocityX=0;
    bunny.velocityY=0;
    bunny.x=1162.5;
    bunny.y=50;
    textSize(35);
    fill("orange");
    strokeWeight("2")
    stroke("red")
    text("Congratulations, You Helped The Bunny Eat the Carrot !!!",200,75);
}                                                                       
}