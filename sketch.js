// function setup() {
//   createCanvas(1200, 1200);
//   frameRate(2);
// }

// function draw() {

//   if (random(1) > 0.5){
//     background(255);
//     fill(0);
//   } else {
//     background(0);
//     fill(255);
//   }

//   ellipse(random(0, width), random(0,height), 200,200)
// }

// function setup() {
//   // create a canvas that takes up the entire browser window
//   createCanvas(windowWidth, windowHeight);
// }


// function draw() {
//   background("#f1f1f1");
//   fill(0);
//   noStroke();
//   rectMode(CENTER);

//   push();
//   translate(width/2, height/2);
//   rotate(radians(frameCount));
//   rect(0, 0, 50, 700);
//   pop();

//   fill("#aaaaaa");
//   push();
//   translate(width/2, height/2);
//   rotate(radians(-frameCount));
//   rect(0, 0, 50, 700);
//   pop();
// }

// let fg=0;
// let bg='#f1f1f1';

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(bg);
//   noStroke();
//   fill(fg);
//   rectMode(CORNER);

//   for (let i = 0; i < mouseX; i++) {
//     push();
//     translate(width/2, height/2);
//     rotate(radians(i*20.3+(i*frameCount*0.005)));
//     rect(mouseX*0.002*i, 0, 100, 10);
//     ellipse(mouseX*0.002*i+15, 35, 16, 16);
//     pop();
//   }

//   translate(mouseX, mouseY);
//   triangle(0, 0, 40, 40, 0, 60);
// }

// function setup(){
//   createCanvas(500,500, WEBGL);
// }

// function draw(){
//   background(0);
//   push();
//   //translate(0,0);
//   rotateY(radians(frameCount));
//   rotateX(radians(frameCount));
//   noFill();
//   stroke('#ff0000');
//   strokeWeight(3);
//   box(300,100,100);
//   pop();

// }

// let tilesX = 10;
// let tilesY = 10;

// let mag;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }


// function draw() {

//   let mag = mouseX;
//   background('#f1f1f1');
//   fill('#000000');
//   noStroke();

//   push();

//   rotateY(radians(frameCount));
//   rotateX(radians(frameCount));

//   for (let x = 0; x < tilesX; x++) {
//     for (let y = 0; y < tilesY; y++) {

//       let posX = map(x, 0, tilesX, -mag, mag);
//       let posY = map(y, 0, tilesY, -mag, mag);

//       push();
//       translate(posX, posY);
//       circle(0, 0, 11);
//       pop();
//     }
//   }

//   pop();
// }



let num = 30;
let array = [num];

function setup(){
  cnv = createCanvas(windowWidth,windowHeight)
  // surface.setLocation(987,70)
  for (let n=0; n<num; n++){
    array[n] = height/num*n;
  }
}

function draw(){
  background('#061324');
  let sW = height / num / 2;
  for (let n = 0; n < num; n++){
    let alpha = map(array[n],0,height,0,255)
    stroke( 255, 0, 0, alpha )
    strokeWeight(sW)
    line(0,array[n],width,array[n]);
    array[n] += 0.5;
    if (array[n]>height) array[n]=0;
  }
  stroke('#061324')
  strokeWeight(900)
  noFill();
  ellipse(width/2, height/2, height+height/4, height+height/4)
}
