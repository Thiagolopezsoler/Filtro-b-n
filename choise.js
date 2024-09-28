let spr1;
let spr1Img;

function preload(){
spr1Img = loadImage('https://cdn-icons-png.flaticon.com/512/274/274991.png')
}

function setup(){
createCanvas(windowWidth, windowHeight);
spr1 = createSprite (200, 100);
spr1.addImage(spr1Img);
spr1Img.resize(spr1Img.width / 2, spr1Img.height / 2); 
spr1.velocity.x = 2;


}
function draw() {
  background(255);
    drawSprites();
    fill(255,0,0);
    rect(0, 200, 4000, 20);
   

    if (spr1.position.x > 1000 && spr1.position.x < windowWidth){
      if (keyIsDown(39)) { 
        spr1.position.x = 100; 
      }
    }
  }














