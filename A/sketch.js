let s;
let m;
let h;

function setup() {
  let s = 0;
  let m = 0;
  let h = 0;
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  angleMode(DEGREES);
  let s = int(millis()/1000);
  let m = int(s/60);
  let h = int(m/60);

  let sa = s*6;
  let ma = m*6;
  let ha = h*15;

  background(127, 130, 130);
  translate(windowWidth/2, windowHeight/2);

  strokeWeight(5);
 
  //s
  push();
  fill(133, 201, 201);
  rotate(sa);
  rect(0, 0, 170, 170, 10, 10, 10, 10);
  pop();
  //m
  push();
  fill(133, 155, 201);
  rotate(ma);
  rect(0, 0, 100, 100, 10, 10, 10, 10);
  pop();
  //-s
  push();
  fill(177, 133, 201);
  rotate(-sa);
  rect(0, 0, 50, 50, 10, 10, 10, 10);
  pop();

  //h
  push();
  fill(200);
  rotate(ha);
  rect(0, 0, 700, 10, 10, 10, 10, 10);
  pop();
  //O
  push();
  fill(130, 77, 62);
  ellipse(0, 0, 20, 20);
  pop();



}
