let img;
let promedioRed;
let promdioRojo;
let promedioBlue;
let promedioAzul;
let promedioGreen;
let promedioVerde

function preload() {
  img = loadImage('https://http2.mlstatic.com/D_NQ_NP_889329-MLA45348240830_032021-O.webp');
  // imagen 1200 px, 1200 px
}
function setup() {
  createCanvas(img.width, img.height);
  background(220);
  
  for(let pixelX = 0; pixelX < img.width ; pixelX++){
   for(let pixelY = 0; pixelY < img.height ; pixelY++){
     
     let c1 = img.get (pixelX + 1, pixelY    );
     let c2 = img.get (pixelX + 1, pixelY - 1);
     let c3 = img.get (pixelX    , pixelY - 1);
     let c4 = img.get (pixelX - 1, pixelY - 1);
     let c5 = img.get (pixelX - 1, pixelY    );
     let c6 = img.get (pixelX - 1, pixelY + 1);
     let c7 = img.get (pixelX    , pixelY + 1);
     let c8 = img.get (pixelX + 1, pixelY + 1);
     
     let promedioRed = c1[0]+c2[0]+c3[0]+c4[0]+c5[0]+c6[0]+c7[0]+c8[0];
     let promedioRojo = promedioRed/8;
     
     let promedioBlue = c1[2]+c2[2]+c3[2]+c4[2]+c5[2]+c6[2]+c7[2]+c8[2];
     let promedioAzul = promedioBlue/8;
     
     let promedioGreen = c1[1]+c2[1]+c3[1]+c4[1]+c5[1]+c6[1]+c7[1]+c8[1];
     let promedioVerde = promedioGreen/8;
     
     let promedio = [0, 0, 0, 0]

       promedio[0] = red(promedioRojo)
       promedio[1] = green(promedioVerde)
       promedio[2] = blue(promedioAzul) 
       promedio[3] = 100
     
     img.set(pixelX, pixelY, promedio);
   }   
  }
  img.updatePixels();
}

function draw() {
 image(img,0,0)
}