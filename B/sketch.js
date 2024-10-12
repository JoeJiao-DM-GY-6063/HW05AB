let md;
let mr;

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(31, 32, 36);
  let distmouse = dist(mouseX, mouseY, windowWidth / 2, 400);

  //rod
  strokeWeight(5);
  push();
  fill(64, 53, 40);
  rect(windowWidth / 2, 600, 30, 400);
  pop();

   //light
   push();
   noStroke();
   fill(mr, 150, 50);
   ellipse(width / 2, height / 2, md);
   pop();
   
  //head
  push();
  fill(245, 100, 81);
  ellipse(windowWidth / 2, 400, 40, 60);
  pop();

  let P = 1000;
  let counter = millis() % P;

  if (distmouse < 60) {
    md = map(counter, 0, P, 20, 500);
    mr = map(counter, 0, P, 150, 255);
  } else {
    push();
    fill(69, 41, 30);
    ellipse(windowWidth / 2, 400, 40, 60);
    pop();

    md = 0;
    mr = 0;
  }

 
}
