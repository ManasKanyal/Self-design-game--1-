var ball,ball_img,car1,car1_img,car2,car2_img

function preload(){

ball_img = loadAnimation("Ball1.png","Ball2.png","Ball3.png","Ball4.png");
car1_img = loadAnimation("Car1a.png","Car1b.png","Car1c.png","Car1d.png");
car2_img = loadAnimation("Car2a.png","Car2b.png","Car2c.png","Car2d.png");
car1Img = loadImage("Car1a.png")
car2Img = loadImage("Car2a.png");
ballImg = loadImage("Ball1.png");

}

function setup(){

createCanvas(1300,600)

car1 = createSprite(80,350,20,20);
car1.addImage(car1Img);
car1.scale = 1.07;

car2 =  createSprite(1200,350,20,20);
car2.addImage(car2Img);
car2.scale = 0.8;

ball =createSprite(650,300,10,10);
ball.addImage(ballImg);
ball.scale = 0.2


}

function draw() {
  
  background("blue");
        
        
  drawSprites();
        
}