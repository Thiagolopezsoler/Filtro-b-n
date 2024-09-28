/*let img;
let colorpixel = 0;
let pixelX = 0;
let pixelY = 0;
let brillo;
let nuevocolor = 0;
function preload() { 
  img = loadImage('nic-truenow.jpg');
}

function setup() {
  createCanvas(2000, 3000);
    background(0);
    image(img, 0, 0);

    for (let pixelX = 0; pixelX < img.width; pixelX++) {
      for (let pixelY = 0; pixelY < img.height; pixelY++) {
      colorPixel = img.get(pixelX,pixelY); 
      brillo =  brightness(colorpixel);
      if (brillo<150){
        nuevocolor=0}
        else {
        nuevocolor = 255}
        img.set(pixelX,pixelY,nuevocolor);
     }
      }
      img.updatePixels();
}

function draw(){
  image(img, 0, 0);
      }
     
*/
let img;

function preload() {
  img = loadImage('nic-truenow.jpg');
  // imagen 1200 px, 1200 px
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  image(img, 0, 0);

  for (let pixelX = 0; pixelX < img.width; pixelX++) {
    for (let pixelY = 0; pixelY < img.height; pixelY++) {
      let colorPixel = img.get(pixelX, pixelY);
      let brillo = brightness(colorPixel);
      
      console.log(brillo);
      
      let nuevoColor;
      if (brillo >= 52) {
        nuevoColor = 0;
      } else {
        nuevoColor = 255;
      }
      img.set(pixelX, pixelY, nuevoColor);
    }
  }

  img.updatePixels();

}

function draw() {
    image(img, 0, 0);
}

